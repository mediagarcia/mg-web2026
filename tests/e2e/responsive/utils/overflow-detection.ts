import { Page, expect } from '@playwright/test';

/**
 * Overflow detection utilities for responsive testing
 * Detects horizontal scroll issues that break mobile layouts
 */

export interface OverflowResult {
  hasOverflow: boolean;
  documentWidth: number;
  viewportWidth: number;
  overflowAmount: number;
  overflowingElements: OverflowingElement[];
}

export interface OverflowingElement {
  selector: string;
  tagName: string;
  className: string;
  width: number;
  right: number;
  overflowAmount: number;
}

/**
 * Check if page has horizontal overflow
 */
export async function checkHorizontalOverflow(page: Page): Promise<OverflowResult> {
  const result = await page.evaluate(() => {
    const viewportWidth = window.innerWidth;
    const documentWidth = document.documentElement.scrollWidth;
    const hasOverflow = documentWidth > viewportWidth;
    const overflowAmount = documentWidth - viewportWidth;

    // Find elements causing overflow
    const overflowingElements: OverflowingElement[] = [];

    if (hasOverflow) {
      const allElements = document.querySelectorAll('*');
      allElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.right > viewportWidth + 1) { // +1 for floating point tolerance
          overflowingElements.push({
            selector: getSelector(el),
            tagName: el.tagName.toLowerCase(),
            className: el.className?.toString() || '',
            width: rect.width,
            right: rect.right,
            overflowAmount: rect.right - viewportWidth,
          });
        }
      });
    }

    function getSelector(el: Element): string {
      if (el.id) return `#${el.id}`;
      if (el.className) {
        const classes = el.className.toString().split(' ').slice(0, 3).join('.');
        return `${el.tagName.toLowerCase()}.${classes}`;
      }
      return el.tagName.toLowerCase();
    }

    return {
      hasOverflow,
      documentWidth,
      viewportWidth,
      overflowAmount,
      overflowingElements: overflowingElements.slice(0, 10), // Limit to top 10
    };
  });

  return result;
}

/**
 * Assert no horizontal overflow on page
 */
export async function assertNoHorizontalOverflow(
  page: Page,
  options?: { allowedOverflow?: number }
): Promise<void> {
  const allowedOverflow = options?.allowedOverflow ?? 0;
  const result = await checkHorizontalOverflow(page);

  if (result.hasOverflow && result.overflowAmount > allowedOverflow) {
    const elementInfo = result.overflowingElements
      .map((el) => `  - ${el.selector} (overflow: ${el.overflowAmount.toFixed(0)}px)`)
      .join('\n');

    throw new Error(
      `Horizontal overflow detected: ${result.overflowAmount.toFixed(0)}px\n` +
        `Document width: ${result.documentWidth}px, Viewport: ${result.viewportWidth}px\n` +
        `Overflowing elements:\n${elementInfo}`
    );
  }
}

/**
 * Get all elements wider than viewport
 */
export async function getWideElements(page: Page): Promise<OverflowingElement[]> {
  return await page.evaluate(() => {
    const viewportWidth = window.innerWidth;
    const wideElements: OverflowingElement[] = [];

    document.querySelectorAll('*').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width > viewportWidth) {
        wideElements.push({
          selector: el.id ? `#${el.id}` : el.tagName.toLowerCase(),
          tagName: el.tagName.toLowerCase(),
          className: el.className?.toString() || '',
          width: rect.width,
          right: rect.right,
          overflowAmount: rect.width - viewportWidth,
        });
      }
    });

    return wideElements;
  });
}

/**
 * Check if an element is horizontally scrollable
 */
export async function isElementScrollable(
  page: Page,
  selector: string
): Promise<boolean> {
  return await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return false;
    return el.scrollWidth > el.clientWidth;
  }, selector);
}

/**
 * Wait for page to be fully loaded and stable
 */
export async function waitForPageStable(page: Page): Promise<void> {
  await page.waitForLoadState('domcontentloaded');

  // Wait for any animations to settle
  await page.waitForTimeout(500);
}

/**
 * Scroll to bottom and back to trigger lazy-loaded content
 */
export async function triggerLazyContent(page: Page): Promise<void> {
  await page.evaluate(async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const steps = Math.ceil(scrollHeight / viewportHeight);

    for (let i = 0; i <= steps; i++) {
      window.scrollTo(0, i * viewportHeight);
      await new Promise((r) => setTimeout(r, 100));
    }

    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 200));
  });
}
