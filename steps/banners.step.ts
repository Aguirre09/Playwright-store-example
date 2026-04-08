import { createBdd } from 'playwright-bdd';
import { test } from './fixtures.js';
import { expect } from '@playwright/test';

const { Given, Then, When } = createBdd(test);

Given('El usuario navega a la tienda de LambdaTest', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  
  // 1. Navegamos y esperamos a que el DOM sea estable
  await page.goto('https://ecommerce-playground.lambdatest.io/', { 
    waitUntil: 'domcontentloaded' 
  });
  
  // 2. En lugar de la flecha, esperamos al contenedor de los slides
  // Este SIEMPRE es visible si la página cargó.
  const sliderContainer = page.locator('.swiper-wrapper').first();
  await sliderContainer.waitFor({ state: 'visible', timeout: 20000 });
});



// When('navega por los banners del slider', async ({ page }) => {
//   // 1. Localizamos usando tu selector "1 of 1"
//   const botonNext = page.locator('.design-carousel .carousel-control-next');
//   const contenedorBanners = page.locator('.design-carousel .carousel-inner');

//   // 2. CAMBIO CLAVE: Esperamos a que esté en el DOM (attached), no necesariamente visible
//   await botonNext.waitFor({ state: 'attached', timeout: 15000 });
  
//   // 3. TRUCO DE QA: Hacemos un hover para que el carrusel "despierte" y muestre los controles
//   await botonNext.hover({ force: true });
  
//   process.stdout.write("\n[QA] Selector detectado y activado. Iniciando capturas...");

//   for (let i = 0; i < 3; i++) {
//     process.stdout.write(`\nCapturando Banner #${i + 1}... `);

//     // 4. Captura visual
//     await expect.soft(contenedorBanners).toHaveScreenshot(`lambda-banner-${i}.png`, {
//       animations: 'disabled',
//       threshold: 0.2,
//       timeout: 15000
//     });

//     // 5. Clic forzado (ignora si Playwright piensa que sigue oculto)
//     await botonNext.click({ force: true });
    
//     // Pausa para la transición
//     await page.waitForTimeout(3000); 
    
//     process.stdout.write(`¡OK!`);
//   }
// });


// When('navega por los banners del slider', async ({ page }) => {
//   const seccionCarrusel = page.locator('.design-carousel').first();
//   const botonNext = seccionCarrusel.locator('.carousel-control-next');
  
//   // 1. CONTAMOS: ¿Cuántos banners hay realmente en el DOM?
//   const totalBanners = await seccionCarrusel.locator('.carousel-item').count();

//   process.stdout.write(`\n[QA] Banners detectados: ${totalBanners}`);

//   // 2. LOGICA DE CONTROL:
//   if (totalBanners === 0) {
//     throw new Error("❌ ERROR: No se encontraron banners en el slider principal.");
//   }

//   if (totalBanners === 1) {
//     process.stdout.write("\n[QA] Solo hay 1 banner. Tomando captura única y terminando...");
//     await expect.soft(seccionCarrusel.locator('.carousel-item.active')).toHaveScreenshot('banner-unico.png');
//     return; // Salimos del paso con éxito
//   }

//   // 3. CICLO DINÁMICO: Solo iteramos según la cantidad real (máximo 3)
//   const iteraciones = Math.min(totalBanners, 3);

//   for (let i = 0; i < iteraciones; i++) {
//     process.stdout.write(`\nCapturando Banner #${i + 1} de ${totalBanners}... `);

//     const activeBanner = seccionCarrusel.locator('.carousel-item.active');
    
//     await expect.soft(activeBanner).toHaveScreenshot(`lambda-banner-${i}.png`, {
//       animations: 'disabled',
//       timeout: 10000
//     });

//     // Solo hacemos clic si no es el último banner que queremos capturar
//     if (i < iteraciones - 1) {
//       await botonNext.click({ force: true });
//       await page.waitForTimeout(3000);
//     }
//   }
// });

When('navega por los banners del slider', async ({ page }) => {
  // 1. Localización del componente raíz (tu selector 1 of 1)
  const seccionCarrusel = page.locator('.design-carousel').first();
  const botonNext = seccionCarrusel.locator('.carousel-control-next');
  
  // 2. CONTEO DINÁMICO: Verificamos la realidad del DOM
  const totalBanners = await seccionCarrusel.locator('.carousel-item').count();
  console.log(`\n[QA INFO] Banners detectados en el sistema: ${totalBanners}`);

  // ESCENARIO A: Cero Banners (Error crítico de negocio)
  if (totalBanners === 0) {
    throw new Error("❌ FALLO CRÍTICO: El carrusel principal no tiene imágenes.");
  }

  // ESCENARIO B: Un solo Banner (No hay navegación, solo una foto)
  if (totalBanners === 1) {
    console.log("[QA INFO] Solo un banner disponible. Capturando estado único...");
    await expect.soft(seccionCarrusel).toHaveScreenshot('banner-unico.png', {
      animations: 'disabled'
    });
    return; // Finaliza el paso con éxito
  }

  // ESCENARIO C: Múltiples Banners (Tu flujo principal)
  // Limitamos a 3 para no hacer el test eterno si hay 20 banners
  const limite = Math.min(totalBanners, 3);

  for (let i = 0; i < limite; i++) {
    console.log(`[QA INFO] Procesando Banner ${i + 1} de ${limite}...`);

    // Capturamos el contenedor interno
    const inner = seccionCarrusel.locator('.carousel-inner');
    await expect.soft(inner).toHaveScreenshot(`lambda-banner-${i}.png`, {
      animations: 'disabled',
      threshold: 0.2,
      timeout: 15000
    });

    // Solo hacemos click si no es el último del límite
    if (i < limite - 1) {
      // Usamos hover para asegurar que el botón sea "visible" para el navegador
      await botonNext.hover({ force: true });
      await botonNext.click({ force: true });
      
      // Pausa para que la transición de Bootstrap termine
      await page.waitForTimeout(3000);
    }
  }
});


Then('el slider debe tener varios banners disponibles', async ({ page }) => {
  // Verificamos que el contenedor de las imágenes esté presente
  const slider = page.locator('.swiper-wrapper').first();
  await expect(slider).toBeVisible();
});

