import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['features/*.feature'],
  importTestFrom: 'steps/login.steps.ts', // Donde exportamos nuestro 'test' extendido
});

export default defineConfig({
  testDir,
  reporter: 'html',
  use: {
    screenshot: 'on',
    trace: 'on',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }]
});