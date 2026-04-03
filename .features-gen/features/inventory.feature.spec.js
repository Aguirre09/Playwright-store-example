// Generated from: features/inventory.feature
import { test } from "../../steps/fixtures.ts";

test.describe('Inventory', () => {

  test('Agregar todos los productos al carrito', async ({ Given, When, Then, And, page }) => { 
    await Given('El usuario abre la pagina', null, { page }); 
    await When('Ingresa credenciales "standard_user" y "secret_sauce"', null, { page }); 
    await And('Clic en el boton de login', null, { page }); 
    await And('Agrega todos los productos disponibles al carrito', null, { page }); 
    await When('El usuario abre el carrito de compras', null, { page }); 
    await Then('Deberían aparecer los 6 productos en la lista del carrito', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/inventory.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given El usuario abre la pagina","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Ingresa credenciales \"standard_user\" y \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"secret_sauce\"","children":[{"start":40,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And Clic en el boton de login","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And Agrega todos los productos disponibles al carrito","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When El usuario abre el carrito de compras","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Deberían aparecer los 6 productos en la lista del carrito","stepMatchArguments":[{"group":{"start":22,"value":"6","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end