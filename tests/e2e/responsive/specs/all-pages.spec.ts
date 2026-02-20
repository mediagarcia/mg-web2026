import { test, expect } from '@playwright/test';
import { viewports } from '../fixtures/viewports';
import { allPages, criticalPages, highPriorityPages, TestPage } from '../fixtures/test-urls';
import { assertNoHorizontalOverflow, waitForPageStable } from '../utils/overflow-detection';

/**
 * P3: All Pages Smoke Test
 * Comprehensive smoke test for all 29 pages at key viewports
 */

// Key viewports for smoke testing
const smokeTestViewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1024, height: 800 },
];

test.describe('All Pages Smoke Tests', () => {
  test.describe('Critical Pages (P0)', () => {
    for (const pageInfo of criticalPages) {
      test.describe(pageInfo.name, () => {
        for (const viewport of smokeTestViewports) {
          test(`loads correctly at ${viewport.name} (${viewport.width}px)`, async ({
            page,
          }) => {
            await page.setViewportSize({
              width: viewport.width,
              height: viewport.height,
            });

            const response = await page.goto(pageInfo.url);

            // Page should load successfully
            expect(response?.status()).toBeLessThan(400);

            await waitForPageStable(page);

            // No JavaScript errors
            const errors: string[] = [];
            page.on('pageerror', (error) => {
              errors.push(error.message);
            });

            await page.waitForTimeout(500);
            expect(errors.length).toBe(0);

            // No horizontal overflow
            await assertNoHorizontalOverflow(page);

            // Main content should be visible
            const main = page.locator('main, [role="main"], section').first();
            await expect(main).toBeVisible();

            // Navigation should be present
            const nav = page.locator('header, nav').first();
            await expect(nav).toBeVisible();
          });
        }
      });
    }
  });

  test.describe('High Priority Pages', () => {
    for (const pageInfo of highPriorityPages) {
      test(`${pageInfo.name} (${pageInfo.url}) loads at all viewports`, async ({
        page,
      }) => {
        for (const viewport of smokeTestViewports) {
          await page.setViewportSize({
            width: viewport.width,
            height: viewport.height,
          });

          const response = await page.goto(pageInfo.url);
          expect(response?.status()).toBeLessThan(400);

          await waitForPageStable(page);
          await assertNoHorizontalOverflow(page);
        }
      });
    }
  });

  test.describe('All Pages - Quick Load Test', () => {
    for (const pageInfo of allPages) {
      test(`${pageInfo.name} (${pageInfo.url}) loads successfully`, async ({
        page,
      }) => {
        const response = await page.goto(pageInfo.url);
        expect(response?.status()).toBeLessThan(400);

        await waitForPageStable(page);

        // Page should have content
        const body = await page.locator('body').textContent();
        expect(body?.length).toBeGreaterThan(100);
      });
    }
  });
});

test.describe('Page Feature Verification', () => {
  test.describe('Pages with Hero Sections', () => {
    const pagesWithHero = allPages.filter((p) => p.hasHeroSection);

    for (const pageInfo of pagesWithHero.slice(0, 10)) {
      test(`${pageInfo.name} has visible hero section`, async ({ page }) => {
        await page.goto(pageInfo.url);
        await waitForPageStable(page);

        // Hero should have a main heading
        const heroHeading = page.locator('h1').first();
        await expect(heroHeading).toBeVisible();

        // Hero heading should have reasonable size
        const fontSize = await heroHeading.evaluate((el) => {
          return parseFloat(window.getComputedStyle(el).fontSize);
        });
        expect(fontSize).toBeGreaterThan(20);
      });
    }
  });

  test.describe('Pages with Grid Layouts', () => {
    const pagesWithGrid = allPages.filter((p) => p.hasGridLayout);

    for (const pageInfo of pagesWithGrid.slice(0, 5)) {
      test(`${pageInfo.name} has responsive grid`, async ({ page }) => {
        await page.goto(pageInfo.url);
        await waitForPageStable(page);

        const grids = page.locator('[class*="grid"]');
        const count = await grids.count();
        expect(count).toBeGreaterThan(0);

        // Test grid at mobile
        await page.setViewportSize({ width: 375, height: 667 });
        await assertNoHorizontalOverflow(page);

        // Test grid at desktop
        await page.setViewportSize({ width: 1024, height: 800 });
        await assertNoHorizontalOverflow(page);
      });
    }
  });
});

test.describe('Navigation Consistency', () => {
  test('navigation is consistent across all pages', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });

    for (const pageInfo of criticalPages.slice(0, 5)) {
      await page.goto(pageInfo.url);
      await waitForPageStable(page);

      // Logo should be present
      const logo = page.locator('header a:has-text("MediaGarcia")');
      await expect(logo).toBeVisible();

      // Desktop nav should be visible
      const desktopNav = page.locator('header ul').filter({ hasText: 'Services' }).first();
      await expect(desktopNav).toBeVisible();

      // CTA should be visible
      const cta = page.locator('header a:has-text("Book a Strategy Call")');
      await expect(cta).toBeVisible();
    }
  });
});

test.describe('Footer Consistency', () => {
  test('footer is present on all pages', async ({ page }) => {
    for (const pageInfo of criticalPages.slice(0, 5)) {
      await page.goto(pageInfo.url);

      // Scroll to bottom
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await page.waitForTimeout(500);

      const footer = page.locator('footer');
      await expect(footer).toBeVisible();
    }
  });
});

test.describe('Page Load Performance', () => {
  test('critical pages load within timeout', async ({ page }) => {
    for (const pageInfo of criticalPages.slice(0, 5)) {
      const startTime = Date.now();

      await page.goto(pageInfo.url, { waitUntil: 'domcontentloaded' });

      const loadTime = Date.now() - startTime;

      // Should load within 10 seconds
      expect(loadTime).toBeLessThan(10000);
    }
  });
});

test.describe('Mobile Experience', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
  });

  test('all critical pages work on mobile', async ({ page }) => {
    for (const pageInfo of criticalPages) {
      await page.goto(pageInfo.url);
      await waitForPageStable(page);

      // Hamburger should be visible
      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      await expect(hamburger).toBeVisible();

      // No horizontal overflow
      await assertNoHorizontalOverflow(page);

      // Content should be readable
      const h1 = page.locator('h1').first();
      if (await h1.isVisible()) {
        const fontSize = await h1.evaluate((el) => {
          return parseFloat(window.getComputedStyle(el).fontSize);
        });
        expect(fontSize).toBeGreaterThanOrEqual(24);
      }
    }
  });
});

test.describe('Desktop Experience', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 });
  });

  test('all critical pages work on desktop', async ({ page }) => {
    for (const pageInfo of criticalPages) {
      await page.goto(pageInfo.url);
      await waitForPageStable(page);

      // Desktop nav should be visible
      const desktopNav = page.locator('header ul').filter({ hasText: 'Services' }).first();
      await expect(desktopNav).toBeVisible();

      // Hamburger should NOT be visible
      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      await expect(hamburger).not.toBeVisible();

      // No overflow
      await assertNoHorizontalOverflow(page);
    }
  });
});

test.describe('Cross-Page Link Integrity', () => {
  test('internal links point to valid pages', async ({ page }) => {
    await page.goto('/');
    await waitForPageStable(page);

    // Get all internal links
    const internalLinks = page.locator('a[href^="/"]');
    const hrefs = await internalLinks.evaluateAll((links) =>
      links.map((link) => link.getAttribute('href')).filter(Boolean)
    );

    // Deduplicate
    const uniqueHrefs = Array.from(new Set(hrefs)).slice(0, 10);

    for (const href of uniqueHrefs) {
      if (href && !href.includes('#')) {
        const response = await page.goto(href);
        expect(response?.status()).toBeLessThan(400);
      }
    }
  });
});
