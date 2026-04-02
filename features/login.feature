Feature: Login SauceDemo

  Scenario: Login exitoso
    Given El usuario abre la pagina
    When Ingresa credenciales "standard_user" y "secret_sauce"
    And Clic en el boton de login
    Then Deberia ver el titulo "Products"