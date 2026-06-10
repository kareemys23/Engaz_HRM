import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['line'],
    ['allure-playwright', { outputFolder: 'allure-results' }],
    ['./tests/allureReporter.js'],
    ...(process.env.RP_ENDPOINT ? [[
      '@reportportal/agent-js-playwright',
      {
        apiKey: process.env.RP_API_KEY ?? '',
        endpoint: process.env.RP_ENDPOINT ?? '',
        project: process.env.RP_PROJECT ?? '',
        launch: process.env.RP_LAUNCH_NAME ?? 'Playwright Tests',
        attributes: [{ value: 'playwright' }],
        description: 'Playwright automated test run',
      },
    ] as [string, Record<string, unknown>]] : []),
  ],
  timeout: 30000,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: 'https://qa.engazhr.co/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: process.env.CI ? 'on-first-retry' : 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: !!process.env.CI,
    actionTimeout: 10000,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: null, deviceScaleFactor: undefined },
    },
  ],
});
