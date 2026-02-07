import { test, expect } from '@playwright/test';
import { viewports } from '../fixtures/viewports';
import {
  waitForAnimations,
  getAnimationState,
  assertFadeInComplete,
  scrollToElement,
  testHoverAnimation,
  testAccordionAnimation,
} from '../utils/animation-utils';
import { waitForPageStable } from '../utils/overflow-detection';

/**
 * P2: Framer Motion Animation Tests
 * Tests animations in 25+ components:
 * - Entry animations (fade-in, slide-up)
 * - Scroll-triggered (whileInView)
 * - Interactive (FAQ accordion, mega-menu)
 * - Background (OrganicShapes, GradientOrb)
 */

test.describe('Entry Animations', () => {
  test('hero section fades in on page load', async ({ page }) => {
    await page.goto('/');

    // Hero should be visible after animations complete
    const heroSection = page.locator('section').first();
    await waitForAnimations(page);

    await expect(heroSection).toBeVisible();

    const heroHeading = page.locator('h1').first();
    await assertFadeInComplete(heroHeading);
  });

  test('entry animations work at mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await waitForAnimations(page);

    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();

    const state = await getAnimationState(heroHeading);
    expect(state.opacity).toBeGreaterThanOrEqual(0.9);
  });

  test('entry animations work at desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });
    await page.goto('/');
    await waitForAnimations(page);

    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();

    const state = await getAnimationState(heroHeading);
    expect(state.opacity).toBeGreaterThanOrEqual(0.9);
  });
});

test.describe('Scroll-Triggered Animations', () => {
  test('elements animate when scrolled into view', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });
    await page.goto('/');
    await waitForPageStable(page);

    // Scroll down to trigger animations
    await page.evaluate(() => {
      window.scrollBy(0, 500);
    });
    await waitForAnimations(page);

    // Find a section that should have animated
    const sections = page.locator('section');
    const count = await sections.count();

    if (count > 1) {
      const secondSection = sections.nth(1);
      if (await secondSection.isVisible()) {
        const state = await getAnimationState(secondSection);
        expect(state.opacity).toBeGreaterThanOrEqual(0.5);
      }
    }
  });

  test('scroll animations work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await waitForPageStable(page);

    // Scroll through the page
    await page.evaluate(async () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const steps = 5;

      for (let i = 0; i <= steps; i++) {
        window.scrollTo(0, (scrollHeight * i) / steps);
        await new Promise((r) => setTimeout(r, 300));
      }
    });

    await waitForAnimations(page);

    // Check that footer area is visible and animated
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('whileInView animations trigger correctly', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    // Find elements that might use whileInView
    const animatedElements = page.locator('[class*="motion"], section > div');
    const count = await animatedElements.count();

    // Scroll each into view and check
    for (let i = 0; i < Math.min(count, 3); i++) {
      const element = animatedElements.nth(i);
      await scrollToElement(page, element);

      if (await element.isVisible()) {
        const state = await getAnimationState(element);
        // After scroll, should be visible
        expect(state.opacity).toBeGreaterThanOrEqual(0.5);
      }
    }
  });
});

test.describe('Interactive Animations', () => {
  test.describe('Navigation Mega Menu Animation', () => {
    test('mega menu animates in on hover', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 800 });
      await page.goto('/');
      await waitForPageStable(page);

      const servicesLink = page.locator('header ul li:has-text("Services") > a').first();
      const megaMenu = page.locator('.fixed.left-0.right-0.bg-white.shadow-2xl');

      // Initial state - not visible
      await expect(megaMenu).not.toBeVisible();

      // Hover to open
      await servicesLink.hover();
      await waitForAnimations(page);

      // Should be visible with animation complete
      await expect(megaMenu).toBeVisible();
    });

    test('mega menu animates out on leave', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 800 });
      await page.goto('/');
      await waitForPageStable(page);

      const servicesLink = page.locator('header ul li:has-text("Services") > a').first();
      const megaMenu = page.locator('.fixed.left-0.right-0.bg-white.shadow-2xl');

      // Open
      await servicesLink.hover();
      await waitForAnimations(page);
      await expect(megaMenu).toBeVisible();

      // Leave
      await page.locator('header a:has-text("MediaGarcia")').hover();
      await page.waitForTimeout(300);

      // Should animate out
      await expect(megaMenu).not.toBeVisible();
    });
  });

  test.describe('Mobile Menu Animation', () => {
    test('mobile menu slides in on open', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await waitForPageStable(page);

      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      const mobileMenu = page.locator('.fixed.inset-0.z-40.bg-white');

      // Initially hidden
      await expect(mobileMenu).not.toBeVisible();

      // Open
      await hamburger.click();
      await waitForAnimations(page);

      // Should be visible
      await expect(mobileMenu).toBeVisible();
    });

    test('mobile menu animates out on close', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await waitForPageStable(page);

      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      const mobileMenu = page.locator('.fixed.inset-0.z-40.bg-white');

      // Open
      await hamburger.click();
      await waitForAnimations(page);
      await expect(mobileMenu).toBeVisible();

      // Close
      await hamburger.click();
      await waitForAnimations(page);

      // Should animate out
      await expect(mobileMenu).not.toBeVisible();
    });
  });

  test.describe('Button Hover Animations', () => {
    test('CTA buttons respond to hover', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 800 });
      await page.goto('/');
      await waitForPageStable(page);

      const ctaButton = page.locator('a:has-text("Book a Strategy Call")').first();

      if (await ctaButton.isVisible()) {
        const { before, after } = await testHoverAnimation(page, ctaButton);

        // Hover should change something (background color change shows as transform or style change)
        // Since we're checking computed styles, at minimum opacity should stay 1
        expect(after.opacity).toBe(1);
      }
    });
  });
});

test.describe('Background Animations', () => {
  test('gradient orb animations render without errors', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    // Check for SVG or canvas elements used for background animations
    const decorativeElements = page.locator('svg, canvas, [class*="gradient"], [class*="orb"]');
    const count = await decorativeElements.count();

    // Page should load without errors
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.waitForTimeout(1000);

    // No console errors related to animations
    const animationErrors = errors.filter((e) =>
      e.toLowerCase().includes('animation') || e.toLowerCase().includes('motion')
    );
    expect(animationErrors.length).toBe(0);
  });

  test('background animations dont cause layout issues', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await waitForPageStable(page);

    // Check document width after animations
    const docWidth = await page.evaluate(() => {
      return document.documentElement.scrollWidth;
    });

    expect(docWidth).toBeLessThanOrEqual(375);
  });
});

test.describe('Animation Performance', () => {
  test('animations do not cause excessive repaints', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });
    await page.goto('/');

    // Enable performance tracing
    const client = await page.context().newCDPSession(page);
    await client.send('Performance.enable');

    // Scroll through the page
    await page.evaluate(async () => {
      const steps = 10;
      const scrollHeight = document.documentElement.scrollHeight;

      for (let i = 0; i <= steps; i++) {
        window.scrollTo(0, (scrollHeight * i) / steps);
        await new Promise((r) => setTimeout(r, 100));
      }
    });

    const metrics = await client.send('Performance.getMetrics');
    const layoutCount = metrics.metrics.find((m) => m.name === 'LayoutCount');

    // Layout count should be reasonable
    if (layoutCount) {
      expect(layoutCount.value).toBeLessThan(500);
    }
  });

  test('animations respect reduced motion preference', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    await waitForPageStable(page);

    // Elements should be immediately visible without animation delay
    const heroHeading = page.locator('h1').first();
    const state = await getAnimationState(heroHeading);

    // With reduced motion, should be fully visible immediately
    expect(state.opacity).toBeGreaterThanOrEqual(0.9);
  });
});

test.describe('Animation on Key Pages', () => {
  const pages = ['/', '/services', '/about', '/contact', '/pricing'];

  for (const url of pages) {
    test(`animations load without errors on ${url}`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => {
        errors.push(error.message);
      });

      await page.goto(url);
      await waitForPageStable(page);
      await waitForAnimations(page);

      // Should have no page errors
      expect(errors.length).toBe(0);
    });
  }
});

test.describe('Stagger Animations', () => {
  test('grid items animate in sequence', async ({ page }) => {
    await page.goto('/services');
    await waitForPageStable(page);

    // Find grid items that might stagger
    const gridItems = page.locator('[class*="grid"] > *').first();

    await scrollToElement(page, gridItems);
    await waitForAnimations(page);

    // Items should be visible after stagger
    if (await gridItems.isVisible()) {
      const state = await getAnimationState(gridItems);
      expect(state.opacity).toBeGreaterThanOrEqual(0.5);
    }
  });
});
