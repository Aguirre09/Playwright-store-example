// IMPORTANTE: Importamos 'test' desde 'playwright-bdd'
import { createBdd } from 'playwright-bdd';
import { test as base } from 'playwright-bdd'; 
import { expect } from '@playwright/test';

// 1. Extendemos el test (Esto es lo que la librería busca)
export const test = base.extend({});

// 2. Inicializamos Given, When, Then usando ese test extendido
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