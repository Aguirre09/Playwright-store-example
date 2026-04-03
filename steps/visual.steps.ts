import { createBdd } from 'playwright-bdd';
import { test } from './fixtures.js'; // Importamos el centralizado
import { expect } from '@playwright/test';

const {  Then } = createBdd(test);

// ... el resto de tus pasos Given, When, Then abajo

Then('El diseño del botón de compra debe ser el estándar', async ({ page }) => {
// 1. Esperamos a que el elemento sea visible antes de intentar la captura
  const boton = page.locator('.btn_inventory').first();
  
  // Agregamos una espera explícita para asegurar que cargó la tienda
  await expect(boton).toBeVisible({ timeout: 10000 });
  await expect(boton).toHaveScreenshot('boton-compra.png', {
    maxDiffPixels: 100, // Tolerancia a pequeños cambios de renderizado
    threshold: 0.2,     // Sensibilidad de color (0 es idéntico, 1 es cualquier cosa)
  });
});