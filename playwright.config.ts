import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['features/*.feature'],
  importTestFrom: 'steps/fixtures.ts', 
  require: ['steps/*.ts'], // <--- ¡ESTA LÍNEA FALTA! Le dice dónde buscar los .ts
  disableWarnings: { importTestFrom: true } 
});

export default defineConfig({
  testDir,
  reporter: [['html'], ['list']],
  use: {

    screenshot: 'on',
    trace: 'on',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }]
});