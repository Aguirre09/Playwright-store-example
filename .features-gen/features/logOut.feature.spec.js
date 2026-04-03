// Generated from: features/logOut.feature
import { test } from "../../steps/fixtures.ts";

test.describe('LogOut SauceDemo', () => {

  test('LogOut', { tag: ['@logout'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('El usuario abre la pagina', null, { page }); 
    await When('Ingresa credenciales "standard_user" y "secret_sauce"', null, { page }); 
    await And('Clic en el boton de login', null, { page }); 
    await Then('Deberia ver el titulo del boton "Swag Labs"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/logOut.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@logout"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given El usuario abre la pagina","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Ingresa credenciales \"standard_user\" y \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":39,"value":"\"secret_sauce\"","children":[{"start":40,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And Clic en el boton de login","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Deberia ver el titulo del boton \"Swag Labs\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Swag Labs\"","children":[{"start":33,"value":"Swag Labs","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end