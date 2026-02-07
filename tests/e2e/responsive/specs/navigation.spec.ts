import { test, expect } from '@playwright/test';
import { viewports, criticalViewports } from '../fixtures/viewports';

/**
 * P0: Navigation Tests
 * Tests the critical desktop/mobile navigation transition at the lg breakpoint (1024px)
 *
 * Navigation component structure:
 * - Desktop nav: hidden lg:flex (line 331)
 * - Desktop CTA: hidden lg:block (line 366)
 * - Mobile hamburger: lg:hidden (line 391)
 * - Mobile overlay: lg:hidden (line 420)
 */

test.describe('Navigation Responsive Behavior', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test.describe('lg Breakpoint Transition (1023px -> 1024px)', () => {
    test('hamburger visible at 1023px, hidden at 1024px', async ({ page }) => {
      // Just below lg breakpoint - mobile view
      await page.setViewportSize({ width: 1023, height: 800 });
      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      await expect(hamburger).toBeVisible();

      // At lg breakpoint - desktop view
      await page.setViewportSize({ width: 1024, height: 800 });
      await expect(hamburger).not.toBeVisible();
    });

    test('desktop nav hidden at 1023px, visible at 1024px', async ({ page }) => {
      // The desktop navigation uses "hidden lg:flex"
      const desktopNav = page.locator('header ul.hidden.lg\\:flex, header ul[class*="hidden"][class*="lg:flex"]');

      // Just below lg breakpoint
      await page.setViewportSize({ width: 1023, height: 800 });
      // Desktop nav should be hidden (checking computed style)
      await expect(desktopNav).toHaveCSS('display', 'none');

      // At lg breakpoint
      await page.setViewportSize({ width: 1024, height: 800 });
      await expect(desktopNav).toHaveCSS('display', 'flex');
    });

    test('desktop CTA button hidden at 1023px, visible at 1024px', async ({ page }) => {
      const desktopCTA = page.locator('header').locator('a:has-text("Book a Strategy Call")').first();

      // Just below lg breakpoint
      await page.setViewportSize({ width: 1023, height: 800 });
      await expect(desktopCTA).not.toBeVisible();

      // At lg breakpoint
      await page.setViewportSize({ width: 1024, height: 800 });
      await expect(desktopCTA).toBeVisible();
    });
  });

  test.describe('Mobile Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
    });

    test('mobile menu opens and closes correctly', async ({ page }) => {
      const hamburger = page.locator('button[aria-label="Toggle menu"]');

      // Open menu
      await hamburger.click();

      // Wait for mobile menu overlay to appear (Framer Motion animated)
      const mobileMenu = page.locator('div.fixed.inset-0.z-40');
      await mobileMenu.waitFor({ state: 'visible', timeout: 5000 });

      // Verify menu content is visible (scope to mobile menu to avoid matching hidden desktop nav)
      await expect(mobileMenu.locator('text=Services').first()).toBeVisible();
      await expect(mobileMenu.locator('text=Industries').first()).toBeVisible();
      await expect(mobileMenu.locator('text=Resources').first()).toBeVisible();

      // Close menu
      await hamburger.click();
      await mobileMenu.waitFor({ state: 'hidden', timeout: 5000 });
    });

    test('mobile menu shows all navigation sections', async ({ page }) => {
      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      await hamburger.click();

      const mobileMenu = page.locator('div.fixed.inset-0.z-40');
      await mobileMenu.waitFor({ state: 'visible', timeout: 5000 });

      // Check all main sections are visible (scoped to mobile menu)
      await expect(mobileMenu.locator('text=Services').first()).toBeVisible();
      await expect(mobileMenu.locator('text=Industries').first()).toBeVisible();
      await expect(mobileMenu.locator('text=Resources').first()).toBeVisible();
      await expect(mobileMenu.locator('text=Pricing').first()).toBeVisible();
      await expect(mobileMenu.locator('text=About').first()).toBeVisible();
      await expect(mobileMenu.locator('text=Blog').first()).toBeVisible();

      // CTA button should be visible
      const ctaButton = mobileMenu.locator('a:has-text("Book a Strategy Call")');
      await expect(ctaButton).toBeVisible();
    });

    test('mobile menu links navigate correctly', async ({ page }) => {
      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      await hamburger.click();

      const mobileMenu = page.locator('div.fixed.inset-0.z-40');
      await mobileMenu.waitFor({ state: 'visible', timeout: 5000 });

      // Click on Pricing link within mobile menu
      await mobileMenu.locator('a:has-text("Pricing")').click();

      // Should navigate and close menu
      await expect(page).toHaveURL('/pricing');
    });

    test('mobile CTA button is functional', async ({ page }) => {
      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      await hamburger.click();

      const mobileMenu = page.locator('div.fixed.inset-0.z-40');
      await mobileMenu.waitFor({ state: 'visible', timeout: 5000 });

      const ctaButton = mobileMenu.locator('a:has-text("Book a Strategy Call")');
      await ctaButton.click();

      await expect(page).toHaveURL('/contact');
    });
  });

  test.describe('Desktop Navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 800 });
    });

    test('mega menu appears on hover', async ({ page }) => {
      const servicesLink = page.locator('header ul li:has-text("Services") > a').first();

      // Hover over Services
      await servicesLink.hover();
      await page.waitForTimeout(200);

      // Mega menu should appear
      const megaMenu = page.locator('.fixed.left-0.right-0.bg-white.shadow-2xl');
      await expect(megaMenu).toBeVisible();

      // Should show CRM & RevOps section
      await expect(page.locator('text=CRM & RevOps').first()).toBeVisible();
      await expect(page.locator('text=CRM Onboarding').first()).toBeVisible();
    });

    test('mega menu closes when mouse leaves', async ({ page }) => {
      const servicesLink = page.locator('header ul li:has-text("Services") > a').first();

      // Open mega menu
      await servicesLink.hover();
      await page.waitForTimeout(200);

      const megaMenu = page.locator('.fixed.left-0.right-0.bg-white.shadow-2xl');
      await expect(megaMenu).toBeVisible();

      // Move mouse away
      await page.locator('header').locator('a:has-text("MediaGarcia")').hover();
      await page.waitForTimeout(300);

      await expect(megaMenu).not.toBeVisible();
    });

    test('all dropdown menus work correctly', async ({ page }) => {
      const menuItems = ['Services', 'Industries', 'Resources'];

      for (const item of menuItems) {
        const link = page.locator(`header ul li:has-text("${item}") > a`).first();
        await link.hover();
        await page.waitForTimeout(200);

        const megaMenu = page.locator('.fixed.left-0.right-0.bg-white.shadow-2xl');
        await expect(megaMenu).toBeVisible();

        // Move away to close
        await page.locator('header').locator('a:has-text("MediaGarcia")').hover();
        await page.waitForTimeout(300);
      }
    });
  });

  test.describe('Navigation Scroll Behavior', () => {
    test('header changes style on scroll', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 800 });

      const header = page.locator('header');

      // Initial state - should not have scrolled style
      await expect(header).not.toHaveClass(/shadow-sm/);

      // Scroll down past threshold (>50px)
      await page.evaluate(() => window.scrollTo(0, 200));
      await page.waitForTimeout(300);

      // Should have scrolled style with shadow
      await expect(header).toHaveClass(/shadow-sm/);
    });
  });

  test.describe('Logo Visibility', () => {
    test('logo is visible at all viewport sizes', async ({ page }) => {
      const logo = page.locator('header a:has-text("MediaGarcia")');

      for (const viewport of viewports) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await expect(logo).toBeVisible();
      }
    });
  });

  test.describe('Navigation Accessibility', () => {
    test('hamburger button has accessible label', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      await expect(hamburger).toHaveAttribute('aria-label', 'Toggle menu');
    });

    test('navigation links are keyboard accessible', async ({ page }) => {
      await page.setViewportSize({ width: 1024, height: 800 });

      // Tab through focusable elements: Skip link -> Logo -> First nav item
      await page.keyboard.press('Tab'); // Skip to main content link
      await page.keyboard.press('Tab'); // Logo
      await page.keyboard.press('Tab'); // First nav item

      const focusedElement = page.locator(':focus');
      await expect(focusedElement).toHaveText(/Services|Industries|Resources|Pricing|About|Blog|Work/);
    });
  });
});

test.describe('Navigation on Critical Pages', () => {
  const criticalPages = ['/', '/services', '/contact', '/pricing', '/about'];

  for (const pageUrl of criticalPages) {
    test(`navigation works correctly on ${pageUrl}`, async ({ page }) => {
      await page.goto(pageUrl);
      await page.waitForLoadState('networkidle');

      // Test at mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      const hamburger = page.locator('button[aria-label="Toggle menu"]');
      await expect(hamburger).toBeVisible();

      // Test at desktop viewport
      await page.setViewportSize({ width: 1024, height: 800 });
      await expect(hamburger).not.toBeVisible();

      const desktopNav = page.locator('header ul').filter({ hasText: 'Services' }).first();
      await expect(desktopNav).toBeVisible();
    });
  }
});
