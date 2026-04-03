// Generated from: features/visual.feature
import { test } from "../../steps/fixtures.ts";

test.describe('Validación Visual de la Interfaz', () => {

  test.beforeEach('Background', async ({ Given, When, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('El usuario abre la pagina', null, { page }); 
    await When('Ingresa credenciales "standard_user" y "secret_sauce"', null, { page }); 
    await And('Clic en el boton de login', null, { page }); 
  });
  
  test('Verificar que el botón de compra mantenga su diseño original', { tag: ['@visual'] }, async ({ Then, page }) => { 
    await Then('El diseño del botón de compra debe ser el estándar', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/visual.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":9,"tags":["@visual"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given El usuario abre la pagina","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Ingresa credenciales \"standard_user\" y \"secret_sauce\"","isBg":true,"stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"secret_sauce\"","children":[{"start":40,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And Clic en el boton de login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then El diseño del botón de compra debe ser el estándar","stepMatchArguments":[]}]},
]; // bdd-data-end