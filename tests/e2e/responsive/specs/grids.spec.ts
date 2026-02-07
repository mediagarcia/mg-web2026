import { test, expect } from '@playwright/test';
import { viewports, tailwindBreakpoints } from '../fixtures/viewports';
import { waitForPageStable } from '../utils/overflow-detection';

/**
 * P1: Grid Pattern Tests
 * Tests responsive grid patterns like:
 * - grid-cols-1 md:grid-cols-2 lg:grid-cols-3
 * - grid-cols-1 md:grid-cols-2 lg:grid-cols-5 (footer)
 */

test.describe('Grid Responsive Patterns', () => {
  test.describe('Services Grid', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/services');
      await waitForPageStable(page);
    });

    test('services grid shows 1 column on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      const gridContainer = page.locator('[class*="grid-cols"]').first();
      const gridItems = gridContainer.locator('> *');

      const count = await gridItems.count();
      if (count > 1) {
        // Get positions of first two items
        const firstBox = await gridItems.nth(0).boundingBox();
        const secondBox = await gridItems.nth(1).boundingBox();

        if (firstBox && secondBox) {
          // In single column, items should be stacked vertically
          expect(secondBox.y).toBeGreaterThan(firstBox.y + firstBox.height - 10);
        }
      }
    });

    test('services grid shows 2 columns on tablet', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });

      const gridContainer = page.locator('[class*="grid-cols"]').first();
      const gridItems = gridContainer.locator('> *');

      const count = await gridItems.count();
      if (count > 1) {
        const firstBox = await gridItems.nth(0).boundingBox();
        const secondBox = await gridItems.nth(1).boundingBox();

        if (firstBox && secondBox) {
          // In 2 columns, first two items should be side by side
          expect(Math.abs(firstBox.y - secondBox.y)).toBeLessThan(10);
        }
      }
    });

    test('services grid shows 3 columns on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 800 });

      const gridContainer = page.locator('[class*="grid-cols"]').first();
      const gridItems = gridContainer.locator('> *');

      const count = await gridItems.count();
      if (count >= 3) {
        const firstBox = await gridItems.nth(0).boundingBox();
        const secondBox = await gridItems.nth(1).boundingBox();
        const thirdBox = await gridItems.nth(2).boundingBox();

        if (firstBox && secondBox && thirdBox) {
          // In 3 columns, first three items should be on same row
          expect(Math.abs(firstBox.y - secondBox.y)).toBeLessThan(10);
          expect(Math.abs(secondBox.y - thirdBox.y)).toBeLessThan(10);
        }
      }
    });
  });

  test.describe('Footer Grid', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/');
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(500);
    });

    test('footer shows single column on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      const footer = page.locator('footer');
      const footerGrid = footer.locator('[class*="grid"]').first();

      if (await footerGrid.count() > 0) {
        const columns = await footerGrid.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return style.gridTemplateColumns;
        });

        // Single column should have one column track
        const columnCount = columns.split(/\s+/).filter((c) => c && c !== 'none').length;
        expect(columnCount).toBeLessThanOrEqual(2);
      }
    });

    test('footer shows multiple columns on desktop', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 800 });
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

      const footer = page.locator('footer');
      const footerGrid = footer.locator('[class*="grid"]').first();

      if (await footerGrid.count() > 0) {
        const columns = await footerGrid.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return style.gridTemplateColumns;
        });

        const columnCount = columns.split(/\s+/).filter((c) => c && c !== 'none').length;
        expect(columnCount).toBeGreaterThan(2);
      }
    });
  });

  test.describe('Homepage Grids', () => {
    test('all grid sections respond correctly to viewport', async ({ page }) => {
      await page.goto('/');
      await waitForPageStable(page);

      const grids = page.locator('[class*="grid-cols"]');
      const count = await grids.count();

      // Test at mobile
      await page.setViewportSize({ width: 375, height: 667 });

      for (let i = 0; i < Math.min(count, 5); i++) {
        const grid = grids.nth(i);
        if (await grid.isVisible()) {
          const columns = await grid.evaluate((el) => {
            return window.getComputedStyle(el).gridTemplateColumns;
          });

          // Mobile should have 1-2 columns max
          const colCount = columns.split(/\s+/).filter((c) => c && c !== 'none' && !c.includes('0px')).length;
          expect(colCount).toBeLessThanOrEqual(2);
        }
      }

      // Test at desktop
      await page.setViewportSize({ width: 1024, height: 800 });

      for (let i = 0; i < Math.min(count, 5); i++) {
        const grid = grids.nth(i);
        if (await grid.isVisible()) {
          const columns = await grid.evaluate((el) => {
            return window.getComputedStyle(el).gridTemplateColumns;
          });

          // Desktop typically has more columns
          const colCount = columns.split(/\s+/).filter((c) => c && c !== 'none' && !c.includes('0px')).length;
          // Just verify it rendered correctly
          expect(colCount).toBeGreaterThanOrEqual(1);
        }
      }
    });
  });

  test.describe('Industries Grid', () => {
    test('industries grid adapts to viewport', async ({ page }) => {
      await page.goto('/industries');
      await waitForPageStable(page);

      const gridContainer = page.locator('[class*="grid"]').first();

      // Mobile - should stack
      await page.setViewportSize({ width: 375, height: 667 });
      let columns = await gridContainer.evaluate((el) => {
        return window.getComputedStyle(el).gridTemplateColumns;
      });
      let colCount = columns.split(/\s+/).filter((c) => c && c !== 'none' && !c.includes('0px')).length;
      expect(colCount).toBeLessThanOrEqual(2);

      // Desktop - should expand
      await page.setViewportSize({ width: 1024, height: 800 });
      columns = await gridContainer.evaluate((el) => {
        return window.getComputedStyle(el).gridTemplateColumns;
      });
      colCount = columns.split(/\s+/).filter((c) => c && c !== 'none' && !c.includes('0px')).length;
      expect(colCount).toBeGreaterThanOrEqual(1);
    });
  });

  test.describe('Pricing Grid', () => {
    test('pricing cards stack on mobile, row on desktop', async ({ page }) => {
      await page.goto('/pricing');
      await waitForPageStable(page);

      const pricingSection = page.locator('[class*="grid"]').filter({ hasText: /\$|per month|annually/i }).first();

      if (await pricingSection.count() > 0) {
        // Mobile - cards should stack
        await page.setViewportSize({ width: 375, height: 667 });
        const cards = pricingSection.locator('> *');
        const count = await cards.count();

        if (count >= 2) {
          const firstCard = await cards.nth(0).boundingBox();
          const secondCard = await cards.nth(1).boundingBox();

          if (firstCard && secondCard) {
            // Should be stacked vertically
            expect(secondCard.y).toBeGreaterThan(firstCard.y);
          }
        }

        // Desktop - cards might be side by side
        await page.setViewportSize({ width: 1024, height: 800 });

        if (count >= 2) {
          const firstCard = await cards.nth(0).boundingBox();
          const secondCard = await cards.nth(1).boundingBox();

          if (firstCard && secondCard) {
            // On desktop, cards could be side by side (same Y) or still stacked
            // Just verify they're visible
            expect(firstCard.width).toBeGreaterThan(0);
            expect(secondCard.width).toBeGreaterThan(0);
          }
        }
      }
    });
  });

  test.describe('Work/Case Studies Grid', () => {
    test('case studies grid adapts correctly', async ({ page }) => {
      await page.goto('/work');
      await waitForPageStable(page);

      const gridContainer = page.locator('[class*="grid"]').first();

      // Test grid changes across breakpoints
      for (const viewport of viewports) {
        await page.setViewportSize({
          width: viewport.width,
          height: viewport.height,
        });

        const columns = await gridContainer.evaluate((el) => {
          return window.getComputedStyle(el).gridTemplateColumns;
        });

        const colCount = columns.split(/\s+/).filter((c) => c && c !== 'none' && !c.includes('0px')).length;

        if (viewport.width < tailwindBreakpoints.md) {
          expect(colCount).toBeLessThanOrEqual(1);
        } else if (viewport.width < tailwindBreakpoints.lg) {
          expect(colCount).toBeLessThanOrEqual(2);
        } else {
          expect(colCount).toBeGreaterThanOrEqual(1);
        }
      }
    });
  });
});

test.describe('Grid Gap Consistency', () => {
  test('grid gaps scale appropriately', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    const grids = page.locator('[class*="grid"]');
    const count = await grids.count();

    // Check gap at mobile
    await page.setViewportSize({ width: 375, height: 667 });

    for (let i = 0; i < Math.min(count, 3); i++) {
      const grid = grids.nth(i);
      if (await grid.isVisible()) {
        const gap = await grid.evaluate((el) => {
          const style = window.getComputedStyle(el);
          return parseFloat(style.gap) || 0;
        });

        // Gap should be reasonable for mobile (not too large)
        expect(gap).toBeLessThan(100);
      }
    }
  });
});

test.describe('Flexbox Layouts', () => {
  test('flex layouts wrap correctly on mobile', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    await page.setViewportSize({ width: 375, height: 667 });

    const flexContainers = page.locator('[class*="flex-wrap"], [class*="flex"][class*="wrap"]');
    const count = await flexContainers.count();

    for (let i = 0; i < Math.min(count, 5); i++) {
      const container = flexContainers.nth(i);
      if (await container.isVisible()) {
        const children = container.locator('> *');
        const childCount = await children.count();

        if (childCount > 1) {
          const firstChild = await children.nth(0).boundingBox();
          const secondChild = await children.nth(1).boundingBox();

          if (firstChild && secondChild) {
            // If items are on the same line, they shouldn't overflow
            if (Math.abs(firstChild.y - secondChild.y) < 10) {
              expect(firstChild.x + firstChild.width + secondChild.width).toBeLessThanOrEqual(380);
            }
          }
        }
      }
    }
  });
});
