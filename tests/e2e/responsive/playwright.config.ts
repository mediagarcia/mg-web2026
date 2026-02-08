import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for responsive testing
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './specs',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: '../../../playwright-report' }],
    ['list'],
  ],
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: 'http://localhost:3500',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    browserName: 'chromium',
  },

  projects: [
    {
      name: 'Mobile',
      use: {
        ...devices['iPhone 13'],
        viewport: { width: 375, height: 667 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: 'Mobile-Large',
      use: {
        viewport: { width: 428, height: 926 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: 'Tablet',
      use: {
        ...devices['iPad (gen 7)'],
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: 'Desktop-Edge',
      use: {
        viewport: { width: 1023, height: 800 },
      },
    },
    {
      name: 'Desktop',
      use: {
        viewport: { width: 1024, height: 800 },
      },
    },
    {
      name: 'Desktop-Wide',
      use: {
        viewport: { width: 1440, height: 900 },
      },
    },
  ],

  webServer: {
    command: 'npm run dev',
    port: 3500,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
