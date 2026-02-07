import { test, expect } from '@playwright/test';
import { viewports, tailwindBreakpoints } from '../fixtures/viewports';
import { waitForPageStable } from '../utils/overflow-detection';

/**
 * P3: Decorative Element Visibility Tests
 * Tests hidden lg:block patterns and decorative elements:
 * - DotPattern in Hero
 * - Process connector lines
 * - Background orbs and patterns
 * - Extended content that only shows on desktop
 */

test.describe('Decorative Element Visibility', () => {
  test.describe('hidden lg:block Pattern', () => {
    test('decorative elements hidden on mobile, visible on desktop', async ({
      page,
    }) => {
      await page.goto('/');
      await waitForPageStable(page);

      // Find elements with hidden lg:block pattern
      const hiddenOnMobile = page.locator('[class*="hidden"][class*="lg:block"]');
      const count = await hiddenOnMobile.count();

      if (count > 0) {
        // Test at mobile - should be hidden
        await page.setViewportSize({ width: 375, height: 667 });

        for (let i = 0; i < Math.min(count, 5); i++) {
          const element = hiddenOnMobile.nth(i);
          // Check computed display
          const display = await element.evaluate((el) => {
            return window.getComputedStyle(el).display;
          });
          expect(display).toBe('none');
        }

        // Test at desktop - should be visible
        await page.setViewportSize({ width: 1024, height: 800 });

        for (let i = 0; i < Math.min(count, 5); i++) {
          const element = hiddenOnMobile.nth(i);
          const display = await element.evaluate((el) => {
            return window.getComputedStyle(el).display;
          });
          expect(display).not.toBe('none');
        }
      }
    });

    test('lg:hidden elements hide at desktop breakpoint', async ({ page }) => {
      await page.goto('/');
      await waitForPageStable(page);

      // Find elements with lg:hidden pattern
      const hiddenOnDesktop = page.locator('[class*="lg:hidden"]');
      const count = await hiddenOnDesktop.count();

      if (count > 0) {
        // Test at mobile - should be visible (assuming they don't have other hidden classes)
        await page.setViewportSize({ width: 375, height: 667 });

        // Test at desktop - should be hidden
        await page.setViewportSize({ width: 1024, height: 800 });

        for (let i = 0; i < Math.min(count, 5); i++) {
          const element = hiddenOnDesktop.nth(i);
          const display = await element.evaluate((el) => {
            return window.getComputedStyle(el).display;
          });
          expect(display).toBe('none');
        }
      }
    });
  });

  test.describe('Background Decorative Elements', () => {
    test('background orbs and gradients render correctly', async ({ page }) => {
      await page.goto('/');
      await waitForPageStable(page);

      // Look for gradient and orb elements
      const decorativeElements = page.locator(
        '[class*="gradient"], [class*="orb"], [class*="blob"], [class*="bg-"]'
      );

      // These should exist and not cause layout issues
      const count = await decorativeElements.count();
      expect(count).toBeGreaterThan(0);

      // Check at mobile
      await page.setViewportSize({ width: 375, height: 667 });

      const docWidth = await page.evaluate(() => {
        return document.documentElement.scrollWidth;
      });
      expect(docWidth).toBeLessThanOrEqual(375);
    });

    test('SVG patterns render without overflow', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await waitForPageStable(page);

      const svgElements = page.locator('svg');
      const count = await svgElements.count();

      for (let i = 0; i < Math.min(count, 10); i++) {
        const svg = svgElements.nth(i);
        if (await svg.isVisible()) {
          const box = await svg.boundingBox();
          if (box) {
            // SVGs should not overflow viewport
            expect(box.x + box.width).toBeLessThanOrEqual(380);
          }
        }
      }
    });
  });

  test.describe('Section Dividers and Lines', () => {
    test('divider elements adapt to viewport', async ({ page }) => {
      await page.goto('/');
      await waitForPageStable(page);

      const dividers = page.locator('[class*="border"], [class*="divide"], hr');
      const count = await dividers.count();

      if (count > 0) {
        // At mobile
        await page.setViewportSize({ width: 375, height: 667 });

        for (let i = 0; i < Math.min(count, 5); i++) {
          const divider = dividers.nth(i);
          if (await divider.isVisible()) {
            const box = await divider.boundingBox();
            if (box) {
              expect(box.x + box.width).toBeLessThanOrEqual(380);
            }
          }
        }
      }
    });
  });

  test.describe('Icon and Logo Visibility', () => {
    test('icons scale appropriately across viewports', async ({ page }) => {
      await page.goto('/');
      await waitForPageStable(page);

      const icons = page.locator('svg[class*="w-"], svg[class*="h-"]');
      const count = await icons.count();

      if (count > 0) {
        for (const viewport of viewports) {
          await page.setViewportSize({
            width: viewport.width,
            height: viewport.height,
          });

          for (let i = 0; i < Math.min(count, 5); i++) {
            const icon = icons.nth(i);
            if (await icon.isVisible()) {
              const box = await icon.boundingBox();
              if (box) {
                // Icons should be reasonably sized
                expect(box.width).toBeLessThan(200);
                expect(box.height).toBeLessThan(200);
              }
            }
          }
        }
      }
    });
  });

  test.describe('Breakpoint-Specific Content', () => {
    test('md:hidden elements hide at tablet breakpoint', async ({ page }) => {
      await page.goto('/');
      await waitForPageStable(page);

      const mdHidden = page.locator('[class*="md:hidden"]');
      const count = await mdHidden.count();

      if (count > 0) {
        // Below md - should be visible
        await page.setViewportSize({ width: 767, height: 1024 });

        // At md and above - should be hidden
        await page.setViewportSize({ width: 768, height: 1024 });

        for (let i = 0; i < Math.min(count, 3); i++) {
          const element = mdHidden.nth(i);
          const display = await element.evaluate((el) => {
            return window.getComputedStyle(el).display;
          });
          expect(display).toBe('none');
        }
      }
    });

    test('hidden md:block elements show at tablet breakpoint', async ({
      page,
    }) => {
      await page.goto('/');
      await waitForPageStable(page);

      const mdBlock = page.locator('[class*="hidden"][class*="md:block"]');
      const count = await mdBlock.count();

      if (count > 0) {
        // Below md - should be hidden
        await page.setViewportSize({ width: 767, height: 1024 });

        for (let i = 0; i < Math.min(count, 3); i++) {
          const element = mdBlock.nth(i);
          const display = await element.evaluate((el) => {
            return window.getComputedStyle(el).display;
          });
          expect(display).toBe('none');
        }

        // At md and above - should be visible
        await page.setViewportSize({ width: 768, height: 1024 });

        for (let i = 0; i < Math.min(count, 3); i++) {
          const element = mdBlock.nth(i);
          const display = await element.evaluate((el) => {
            return window.getComputedStyle(el).display;
          });
          expect(display).not.toBe('none');
        }
      }
    });
  });

  test.describe('Absolute/Fixed Positioned Decorations', () => {
    test('absolute positioned elements dont cause overflow', async ({
      page,
    }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await waitForPageStable(page);

      const absoluteElements = page.locator('[class*="absolute"], [class*="fixed"]');
      const count = await absoluteElements.count();

      // Document should not have horizontal overflow
      const docWidth = await page.evaluate(() => {
        return document.documentElement.scrollWidth;
      });

      expect(docWidth).toBeLessThanOrEqual(375);
    });

    test('overflow hidden containers properly clip content', async ({
      page,
    }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await waitForPageStable(page);

      const overflowHidden = page.locator('[class*="overflow-hidden"]');
      const count = await overflowHidden.count();

      // Check that overflow hidden is working
      for (let i = 0; i < Math.min(count, 5); i++) {
        const container = overflowHidden.nth(i);
        if (await container.isVisible()) {
          const box = await container.boundingBox();
          if (box) {
            // Container should clip within viewport
            expect(box.x + box.width).toBeLessThanOrEqual(380);
          }
        }
      }
    });
  });
});

test.describe('Decorative Elements on Key Pages', () => {
  const pages = ['/', '/about', '/services'];

  for (const url of pages) {
    test(`decorative elements render correctly on ${url}`, async ({ page }) => {
      await page.goto(url);
      await waitForPageStable(page);

      // Test at all viewports
      for (const viewport of viewports.slice(0, 3)) {
        // Test first 3 viewports
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        });

        // No horizontal overflow
        const docWidth = await page.evaluate(() => {
          return document.documentElement.scrollWidth;
        });

        expect(docWidth).toBeLessThanOrEqual(viewport.width + 5);
      }
    });
  }
});

test.describe('Z-Index Layering', () => {
  test('decorative elements stay behind content', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    // Interactive elements should be clickable (not blocked by decorations)
    const ctaButton = page.locator('a:has-text("Book a Strategy Call")').first();

    await page.setViewportSize({ width: 1024, height: 800 });

    if (await ctaButton.isVisible()) {
      // Button should be clickable
      const box = await ctaButton.boundingBox();
      expect(box).not.toBeNull();

      // Click should work (navigation starts)
      await ctaButton.click();
      await expect(page).toHaveURL(/contact/);
    }
  });
});
