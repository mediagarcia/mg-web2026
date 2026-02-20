import { Page, Locator, expect } from '@playwright/test';

/**
 * Animation testing utilities for Framer Motion
 * Provides helpers for testing scroll-triggered and interactive animations
 */

export interface AnimationState {
  opacity: number;
  transform: string;
  visibility: string;
}

/**
 * Wait for Framer Motion animations to complete
 */
export async function waitForAnimations(
  page: Page,
  timeout: number = 2000
): Promise<void> {
  // Wait for any CSS transitions
  await page.waitForTimeout(100);

  // Check for Framer Motion animation presence
  await page.evaluate(async (maxWait) => {
    const start = Date.now();

    while (Date.now() - start < maxWait) {
      const animatingElements = document.querySelectorAll('[style*="transform"]');
      let allSettled = true;

      animatingElements.forEach((el) => {
        const style = window.getComputedStyle(el);
        // Check for ongoing transitions
        if (style.transitionDuration !== '0s' && style.transitionDuration !== '0ms') {
          allSettled = false;
        }
      });

      if (allSettled) break;
      await new Promise((r) => setTimeout(r, 50));
    }
  }, timeout);
}

/**
 * Get the current animation state of an element
 */
export async function getAnimationState(locator: Locator): Promise<AnimationState> {
  return await locator.evaluate((el) => {
    const style = window.getComputedStyle(el);
    return {
      opacity: parseFloat(style.opacity),
      transform: style.transform,
      visibility: style.visibility,
    };
  });
}

/**
 * Check if element has completed fade-in animation
 */
export async function assertFadeInComplete(locator: Locator): Promise<void> {
  const state = await getAnimationState(locator);
  expect(state.opacity).toBeGreaterThanOrEqual(0.99);
}

/**
 * Scroll element into view and trigger whileInView animations
 */
export async function scrollToElement(
  page: Page,
  locator: Locator
): Promise<void> {
  await locator.scrollIntoViewIfNeeded();
  await waitForAnimations(page);
}

/**
 * Check if element has slide-up animation completed
 * Framer Motion typically uses translateY for slide animations
 */
export async function assertSlideUpComplete(locator: Locator): Promise<void> {
  const state = await getAnimationState(locator);

  // If transform is none or matrix with no Y translation, animation is complete
  if (state.transform === 'none') return;

  // Parse matrix transform to check Y translation
  const matrix = state.transform.match(/matrix.*\((.+)\)/);
  if (matrix) {
    const values = matrix[1].split(',').map((v) => parseFloat(v.trim()));
    // In a 2D matrix, translateY is at index 5
    const translateY = values[5] || 0;
    expect(Math.abs(translateY)).toBeLessThan(5); // Allow small tolerance
  }
}

/**
 * Test hover state triggers animation
 */
export async function testHoverAnimation(
  page: Page,
  locator: Locator
): Promise<{ before: AnimationState; after: AnimationState }> {
  const before = await getAnimationState(locator);
  await locator.hover();
  await waitForAnimations(page, 500);
  const after = await getAnimationState(locator);
  return { before, after };
}

/**
 * Verify element is visible after scroll-triggered animation
 */
export async function verifyScrollTriggeredVisibility(
  page: Page,
  locator: Locator
): Promise<void> {
  // First, scroll the element into view
  await scrollToElement(page, locator);

  // Wait for potential animations
  await waitForAnimations(page);

  // Assert the element is now visible
  await expect(locator).toBeVisible();
  await assertFadeInComplete(locator);
}

/**
 * Check if reduced motion is respected
 */
export async function assertReducedMotionRespected(
  page: Page,
  locator: Locator
): Promise<void> {
  // Emulate prefers-reduced-motion
  await page.emulateMedia({ reducedMotion: 'reduce' });

  const state = await getAnimationState(locator);

  // With reduced motion, element should be immediately visible
  expect(state.opacity).toBe(1);
  expect(state.transform).toBe('none');
}

/**
 * Test accordion/expandable component animation
 */
export async function testAccordionAnimation(
  page: Page,
  triggerLocator: Locator,
  contentLocator: Locator
): Promise<{ isExpanded: boolean; contentVisible: boolean }> {
  // Initial state
  const initiallyVisible = await contentLocator.isVisible();

  // Click to toggle
  await triggerLocator.click();
  await waitForAnimations(page, 500);

  const afterClickVisible = await contentLocator.isVisible();

  return {
    isExpanded: afterClickVisible,
    contentVisible: afterClickVisible !== initiallyVisible,
  };
}

/**
 * Measure animation duration
 */
export async function measureAnimationDuration(
  page: Page,
  triggerAction: () => Promise<void>,
  locator: Locator
): Promise<number> {
  const start = Date.now();

  await triggerAction();

  // Poll for opacity to reach 1
  let elapsed = 0;
  while (elapsed < 5000) {
    const state = await getAnimationState(locator);
    if (state.opacity >= 0.99) {
      return Date.now() - start;
    }
    await page.waitForTimeout(50);
    elapsed = Date.now() - start;
  }

  return elapsed;
}

/**
 * Check stagger animation pattern (elements appearing in sequence)
 */
export async function verifyStaggerAnimation(
  page: Page,
  locators: Locator[]
): Promise<boolean> {
  const times: number[] = [];
  const start = Date.now();

  for (const locator of locators) {
    await locator.scrollIntoViewIfNeeded();

    // Wait for this element to become visible
    while (Date.now() - start < 5000) {
      const state = await getAnimationState(locator);
      if (state.opacity >= 0.5) {
        times.push(Date.now() - start);
        break;
      }
      await page.waitForTimeout(50);
    }
  }

  // Verify stagger: each subsequent element should appear after the previous
  for (let i = 1; i < times.length; i++) {
    if (times[i] <= times[i - 1]) {
      return false;
    }
  }

  return true;
}
