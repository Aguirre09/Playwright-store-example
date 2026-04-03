@visual
Feature: Validación Visual de la Interfaz

  Background:
    Given El usuario abre la pagina
    When Ingresa credenciales "standard_user" y "secret_sauce"
    And Clic en el boton de login

  Scenario: Verificar que el botón de compra mantenga su diseño original
    Then El diseño del botón de compra debe ser el estándar