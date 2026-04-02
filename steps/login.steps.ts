import { createBdd } from 'playwright-bdd';
import { test } from './fixtures.js'; // Importamos el centralizado
import { expect } from '@playwright/test';



const { Given, When, Then } = createBdd(test);

Given('El usuario abre la pagina', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

When('Ingresa credenciales {string} y {string}', async ({ page }, user: string, pass: string) => {
  await page.locator('[data-test="username"]').fill(user);
  await page.locator('[data-test="password"]').fill(pass);
});

When('Clic en el boton de login', async ({ page }) => {
  await page.locator('[data-test="login-button"]').click();
});

Then('Deberia ver el titulo {string}', async ({ page }, title: string) => {
  await expect(page.locator('.title')).toHaveText(title);
});