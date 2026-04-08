// Generated from: features/banner.feature
import { test } from "../../steps/fixtures.ts";

test.describe('Validación Visual de Banners en LambdaTest', () => {

  test('Verificar el slider principal de la tienda', { tag: ['@lambda'] }, async ({ Given, When, Then, page }) => { 
    await Given('El usuario navega a la tienda de LambdaTest', null, { page }); 
    await Then('el slider debe tener varios banners disponibles', null, { page }); 
    await When('navega por los banners del slider', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/banner.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@lambda"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given El usuario navega a la tienda de LambdaTest","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then el slider debe tener varios banners disponibles","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When navega por los banners del slider","stepMatchArguments":[]}]},
]; // bdd-data-end