Feature: Validación Visual de Banners en LambdaTest

  @lambda
  Scenario: Verificar el slider principal de la tienda
    Given El usuario navega a la tienda de LambdaTest
    Then el slider debe tener varios banners disponibles
    When navega por los banners del slider