import { createBdd } from 'playwright-bdd';
import { test } from './fixtures.js'; // Importamos el centralizado
import { expect } from '@playwright/test';

const {  Then } = createBdd(test);

// ... el resto de tus pasos Given, When, Then abajo




Then('Deberia ver el titulo del boton {string}', async ({page}, titulo: string) => {
// 1. Acciones previas
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // 2. Localizamos el elemento por su CLASE (que siempre existe)
  const logoHeader = page.locator('.login_logo');

  // 3. Hacemos la aserción. 
  // Si falla, Playwright te mostrará: "Expected: Swag Labss, Received: Swag Labs"
  await expect(logoHeader).toHaveText(titulo);
});