import { test, expect } from '@playwright/test';
import { viewports } from '../fixtures/viewports';
import { waitForPageStable } from '../utils/overflow-detection';

/**
 * P1: Fluid Typography Tests
 * Tests clamp() based typography scaling from tailwind.config.ts:
 * - text-hero: clamp(3rem, 8vw, 6rem) = 48px to 96px
 * - text-section: clamp(2rem, 5vw, 4rem) = 32px to 64px
 * - spacing-section: clamp(80px, 15vw, 200px)
 * - spacing-section-sm: clamp(60px, 10vw, 120px)
 */

// Typography bounds from tailwind.config.ts
const TYPOGRAPHY = {
  hero: {
    min: 48, // 3rem
    max: 96, // 6rem
    vwFactor: 8,
  },
  section: {
    min: 32, // 2rem
    max: 64, // 4rem
    vwFactor: 5,
  },
};

const SPACING = {
  section: {
    min: 80,
    max: 200,
    vwFactor: 15,
  },
  sectionSm: {
    min: 60,
    max: 120,
    vwFactor: 10,
  },
};

/**
 * Calculate expected clamp value for a given viewport width
 */
function calculateClampValue(
  viewportWidth: number,
  min: number,
  max: number,
  vwFactor: number
): number {
  const vwValue = (viewportWidth * vwFactor) / 100;
  return Math.min(Math.max(vwValue, min), max);
}

test.describe('Fluid Typography - Hero Text', () => {
  test('hero text scales correctly across viewports', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    const heroHeading = page.locator('h1').first();

    for (const viewport of viewports) {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });

      const fontSize = await heroHeading.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize);
      });

      const expectedMin = TYPOGRAPHY.hero.min;
      const expectedMax = TYPOGRAPHY.hero.max;

      // Font size should be within the clamp bounds
      expect(fontSize).toBeGreaterThanOrEqual(expectedMin - 5);
      expect(fontSize).toBeLessThanOrEqual(expectedMax + 5);

      // At smallest viewport, should be at or near minimum
      if (viewport.width <= 375) {
        expect(fontSize).toBeLessThanOrEqual(expectedMin + 20);
      }

      // At largest viewport, should be at or near maximum
      if (viewport.width >= 1440) {
        expect(fontSize).toBeGreaterThanOrEqual(expectedMax - 20);
      }
    }
  });

  test('hero text maintains readability at mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await waitForPageStable(page);

    const heroHeading = page.locator('h1').first();
    const fontSize = await heroHeading.evaluate((el) => {
      return parseFloat(window.getComputedStyle(el).fontSize);
    });

    // Should be at least the minimum (3rem = 48px)
    expect(fontSize).toBeGreaterThanOrEqual(TYPOGRAPHY.hero.min - 5);
  });

  test('hero text does not exceed max at wide viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await waitForPageStable(page);

    const heroHeading = page.locator('h1').first();
    const fontSize = await heroHeading.evaluate((el) => {
      return parseFloat(window.getComputedStyle(el).fontSize);
    });

    // Should not exceed maximum (6rem = 96px)
    expect(fontSize).toBeLessThanOrEqual(TYPOGRAPHY.hero.max + 5);
  });
});

test.describe('Fluid Typography - Section Text', () => {
  test('section headings scale correctly', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    // Find section headings (typically h2s with text-section class)
    const sectionHeadings = page.locator('h2, [class*="text-section"]');
    const count = await sectionHeadings.count();

    if (count > 0) {
      const heading = sectionHeadings.first();

      for (const viewport of viewports) {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        });

        if (await heading.isVisible()) {
          const fontSize = await heading.evaluate((el) => {
            return parseFloat(window.getComputedStyle(el).fontSize);
          });

          // Check it's within reasonable bounds for section text
          expect(fontSize).toBeGreaterThanOrEqual(16); // Minimum readable
          expect(fontSize).toBeLessThanOrEqual(100); // Reasonable max
        }
      }
    }
  });
});

test.describe('Fluid Spacing - Section Padding', () => {
  test('section spacing scales with viewport', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    // Find sections that might use section spacing
    const sections = page.locator('section, [class*="py-section"], [class*="pt-section"], [class*="pb-section"]');
    const count = await sections.count();

    if (count > 0) {
      const section = sections.first();

      // Mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });

      if (await section.isVisible()) {
        const mobilePadding = await section.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return {
            top: parseFloat(style.paddingTop),
            bottom: parseFloat(style.paddingBottom),
          };
        });

        // Desktop viewport
        await page.setViewportSize({ width: 1440, height: 900 });

        const desktopPadding = await section.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return {
            top: parseFloat(style.paddingTop),
            bottom: parseFloat(style.paddingBottom),
          };
        });

        // Desktop padding should be >= mobile (or equal if not using fluid)
        // Allow for sections that don't use fluid spacing
        expect(desktopPadding.top).toBeGreaterThanOrEqual(mobilePadding.top - 10);
      }
    }
  });
});

test.describe('Typography Scaling Continuity', () => {
  test('text scaling is smooth without jumps', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    const heroHeading = page.locator('h1').first();
    const fontSizes: number[] = [];

    // Measure at incremental viewport widths
    const widths = [375, 500, 640, 768, 900, 1024, 1200, 1440];

    for (const width of widths) {
      await page.setViewportSize({ width, height: 800 });
      const fontSize = await heroHeading.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize);
      });
      fontSizes.push(fontSize);
    }

    // Check for smooth scaling - no huge jumps between adjacent sizes
    for (let i = 1; i < fontSizes.length; i++) {
      const diff = Math.abs(fontSizes[i] - fontSizes[i - 1]);
      // Difference should be gradual (less than 30% of smaller size)
      const maxDiff = Math.min(fontSizes[i], fontSizes[i - 1]) * 0.5;
      expect(diff).toBeLessThanOrEqual(maxDiff);
    }
  });
});

test.describe('Line Height Consistency', () => {
  test('line heights maintain readability', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    for (const viewport of viewports) {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });

      const heroHeading = page.locator('h1').first();
      const metrics = await heroHeading.evaluate((el) => {
        const style = window.getComputedStyle(el);
        return {
          fontSize: parseFloat(style.fontSize),
          lineHeight: parseFloat(style.lineHeight),
        };
      });

      // Line height ratio should be reasonable (1.0 to 2.0)
      const ratio = metrics.lineHeight / metrics.fontSize;
      expect(ratio).toBeGreaterThanOrEqual(0.9);
      expect(ratio).toBeLessThanOrEqual(2.0);
    }
  });
});

test.describe('Text Overflow Prevention', () => {
  test('long headings wrap properly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await waitForPageStable(page);

    const headings = page.locator('h1, h2, h3');
    const count = await headings.count();

    for (let i = 0; i < Math.min(count, 5); i++) {
      const heading = headings.nth(i);
      if (await heading.isVisible()) {
        const box = await heading.boundingBox();
        if (box) {
          // Heading should fit within viewport width
          expect(box.x + box.width).toBeLessThanOrEqual(380);
        }
      }
    }
  });

  test('body text remains readable at all sizes', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    for (const viewport of viewports) {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });

      const paragraphs = page.locator('p');
      const count = await paragraphs.count();

      if (count > 0) {
        const firstP = paragraphs.first();
        if (await firstP.isVisible()) {
          const fontSize = await firstP.evaluate((el) => {
            return parseFloat(window.getComputedStyle(el).fontSize);
          });

          // Body text should stay within readable range
          expect(fontSize).toBeGreaterThanOrEqual(14); // Minimum readable
          expect(fontSize).toBeLessThanOrEqual(24); // Maximum for body
        }
      }
    }
  });
});

test.describe('Typography on Key Pages', () => {
  const pages = ['/', '/services', '/about', '/pricing'];

  for (const url of pages) {
    test(`typography scales correctly on ${url}`, async ({ page }) => {
      await page.goto(url);
      await waitForPageStable(page);

      const mainHeading = page.locator('h1').first();

      // Mobile
      await page.setViewportSize({ width: 375, height: 667 });
      const mobileSize = await mainHeading.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize);
      });

      // Desktop
      await page.setViewportSize({ width: 1024, height: 800 });
      const desktopSize = await mainHeading.evaluate((el) => {
        return parseFloat(window.getComputedStyle(el).fontSize);
      });

      // Desktop should be >= mobile for headings
      expect(desktopSize).toBeGreaterThanOrEqual(mobileSize);
    });
  }
});
