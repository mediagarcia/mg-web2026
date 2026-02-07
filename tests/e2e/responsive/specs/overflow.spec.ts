import { test, expect } from '@playwright/test';
import { viewports, mobileViewports } from '../fixtures/viewports';
import { criticalPages, highPriorityPages, allPages } from '../fixtures/test-urls';
import {
  checkHorizontalOverflow,
  assertNoHorizontalOverflow,
  waitForPageStable,
  triggerLazyContent,
} from '../utils/overflow-detection';

/**
 * P0: Overflow Detection Tests
 * Ensures no horizontal scrolling issues at mobile viewports
 * Critical for mobile user experience
 */

test.describe('Horizontal Overflow Detection', () => {
  test.describe('Critical Pages - All Viewports', () => {
    for (const page of criticalPages) {
      for (const viewport of viewports) {
        test(`${page.name} (${page.url}) at ${viewport.width}px has no overflow`, async ({
          page: testPage,
        }) => {
          await testPage.setViewportSize({
            width: viewport.width,
            height: viewport.height,
          });

          await testPage.goto(page.url);
          await waitForPageStable(testPage);

          // Trigger any lazy-loaded content
          await triggerLazyContent(testPage);

          // Assert no horizontal overflow
          await assertNoHorizontalOverflow(testPage);
        });
      }
    }
  });

  test.describe('All Pages - Mobile Viewports', () => {
    // Focus on mobile viewports for all pages
    for (const pageInfo of allPages) {
      test(`${pageInfo.name} (${pageInfo.url}) at 375px has no overflow`, async ({
        page,
      }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto(pageInfo.url);
        await waitForPageStable(page);
        await assertNoHorizontalOverflow(page);
      });
    }
  });

  test.describe('Edge Cases', () => {
    test('homepage handles dynamic content without overflow', async ({
      page,
    }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await waitForPageStable(page);

      // Scroll through the entire page
      await triggerLazyContent(page);

      // Check after all content is loaded
      const result = await checkHorizontalOverflow(page);
      expect(result.hasOverflow).toBe(false);
    });

    test('contact page form elements fit mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/contact');
      await waitForPageStable(page);

      // Form elements should not cause overflow
      await assertNoHorizontalOverflow(page);

      // Specific check for form containers
      const formInputs = page.locator('input, textarea, select');
      const count = await formInputs.count();

      for (let i = 0; i < count; i++) {
        const input = formInputs.nth(i);
        if (await input.isVisible()) {
          const box = await input.boundingBox();
          if (box) {
            expect(box.x).toBeGreaterThanOrEqual(0);
            expect(box.x + box.width).toBeLessThanOrEqual(375);
          }
        }
      }
    });

    test('pricing page tables/cards fit mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/pricing');
      await waitForPageStable(page);

      await assertNoHorizontalOverflow(page);

      // Check pricing cards don't overflow
      const cards = page.locator('[class*="rounded"]').filter({ hasText: /\$/ });
      const count = await cards.count();

      for (let i = 0; i < Math.min(count, 10); i++) {
        const card = cards.nth(i);
        if (await card.isVisible()) {
          const box = await card.boundingBox();
          if (box) {
            expect(box.x + box.width).toBeLessThanOrEqual(380); // Allow small margin
          }
        }
      }
    });

    test('images do not cause overflow', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await waitForPageStable(page);

      const images = page.locator('img');
      const count = await images.count();

      for (let i = 0; i < count; i++) {
        const img = images.nth(i);
        if (await img.isVisible()) {
          const box = await img.boundingBox();
          if (box) {
            expect(box.x + box.width).toBeLessThanOrEqual(380);
          }
        }
      }
    });
  });

  test.describe('Tablet Viewport Tests', () => {
    test('all critical pages fit tablet viewport', async ({ page }) => {
      test.setTimeout(120000); // Extended timeout for iterating many pages
      await page.setViewportSize({ width: 768, height: 1024 });

      for (const pageInfo of criticalPages) {
        await page.goto(pageInfo.url, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(500);
        await assertNoHorizontalOverflow(page);
      }
    });
  });

  test.describe('Container Width Tests', () => {
    test('main container does not exceed 1400px', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('/');
      await waitForPageStable(page);

      // Check max-w containers
      const containers = page.locator('[class*="max-w-"]');
      const count = await containers.count();

      for (let i = 0; i < Math.min(count, 20); i++) {
        const container = containers.nth(i);
        if (await container.isVisible()) {
          const box = await container.boundingBox();
          if (box && box.width > 100) {
            // Ignore tiny elements
            // Container should be centered and not exceed 1400px content width
            expect(box.width).toBeLessThanOrEqual(1440); // Allow for padding
          }
        }
      }
    });
  });

  test.describe('Specific Component Overflow Tests', () => {
    test('hero section fits all viewports', async ({ page }) => {
      test.setTimeout(60000);
      for (const viewport of mobileViewports) {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        });
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(500);

        // Hero text should be visible and not overflow
        const heroHeading = page.locator('h1').first();
        await expect(heroHeading).toBeVisible();

        const box = await heroHeading.boundingBox();
        if (box) {
          expect(box.x).toBeGreaterThanOrEqual(0);
          expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 10);
        }
      }
    });

    test('footer fits mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      // Scroll to footer
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(500);

      const footer = page.locator('footer');
      await expect(footer).toBeVisible();

      const result = await checkHorizontalOverflow(page);
      expect(result.hasOverflow).toBe(false);
    });

    test('navigation menu fits mobile viewport when open', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      await hamburger.click();

      await page.waitForTimeout(500);

      // Mobile menu should not cause overflow
      await assertNoHorizontalOverflow(page);
    });
  });
});

test.describe('Overflow Regression Tests', () => {
  // Tests for common overflow causes
  test('pre/code blocks have proper overflow handling', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Check pages that might have code blocks
    const pagesWithCode = ['/blog', '/resources'];

    for (const url of pagesWithCode) {
      await page.goto(url);
      await waitForPageStable(page);

      const codeBlocks = page.locator('pre, code');
      const count = await codeBlocks.count();

      for (let i = 0; i < count; i++) {
        const block = codeBlocks.nth(i);
        if (await block.isVisible()) {
          // Code blocks should have overflow-x scroll or be contained
          const overflowX = await block.evaluate((el) => {
            return window.getComputedStyle(el).overflowX;
          });
          // Should either have scroll/auto overflow or fit within viewport
          const box = await block.boundingBox();
          if (box && box.width > 375) {
            expect(['scroll', 'auto', 'hidden']).toContain(overflowX);
          }
        }
      }
    }
  });

  test('tables have responsive handling', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/pricing');
    await waitForPageStable(page);

    const tables = page.locator('table');
    const count = await tables.count();

    for (let i = 0; i < count; i++) {
      const table = tables.nth(i);
      if (await table.isVisible()) {
        const box = await table.boundingBox();
        if (box) {
          // Table should either fit or have scrollable container
          if (box.width > 375) {
            const parent = table.locator('..');
            const parentOverflow = await parent.evaluate((el) => {
              return window.getComputedStyle(el).overflowX;
            });
            expect(['scroll', 'auto']).toContain(parentOverflow);
          }
        }
      }
    }
  });
});
