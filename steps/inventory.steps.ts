import { createBdd } from 'playwright-bdd';
import { test } from './fixtures.js';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

When('Agrega todos los productos disponibles al carrito', async ({ page }) => {
  // 1. Usamos una clase que NO cambie después del clic
  const botones = page.locator('.btn_inventory');
  const total = await botones.count();

  for (let i = 0; i < total; i++) {
    // 2. Hacemos clic siempre por índice
    await botones.nth(i).click();
    
    // 3. DEBUG profesional para ver qué pasó
    const textoBoton = await botones.nth(i).innerText();
    console.log(`Botón ${i + 1} ahora dice: ${textoBoton}`);
  }
});

When('El usuario abre el carrito de compras', async ({ page }) => {
  // Hacemos clic en el icono del carrito
  await page.locator('.shopping_cart_link').click();
  // Validamos que la URL haya cambiado a /cart.html
  await expect(page).toHaveURL(/.*cart.html/);
});

Then('Deberían aparecer los {int} productos en la lista del carrito', async ({ page }, cantidad) => {
  // 1. Localizamos todos los items dentro del carrito
  const itemsEnCarrito = page.locator('.cart_item');
  
  // 2. Verificamos la cantidad total
  const conteoReal = await itemsEnCarrito.count();
  console.log(`🛒 Verificando carrito: Encontrados ${conteoReal} productos.`);
  
  expect(conteoReal).toBe(parseInt(cantidad));

  // 3. CICLO FOR: Validamos que cada item tenga nombre y cantidad
  for (let i = 0; i < conteoReal; i++) {
    const nombreProducto = await itemsEnCarrito.nth(i).locator('.inventory_item_name').innerText();
    const cantidadProducto = await itemsEnCarrito.nth(i).locator('.cart_quantity').innerText();
    
    console.log(`Item #${i + 1} verificado: ${nombreProducto} (Cant: ${cantidadProducto})`);

    // Aserciones de integridad
    await expect(itemsEnCarrito.nth(i).locator('.inventory_item_name')).toBeVisible();
    expect(cantidadProducto).toBe("1"); // En SauceDemo, cada clic agrega 1 unidad
  }
});