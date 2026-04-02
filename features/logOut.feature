Feature: LogOut SauceDemo

  Scenario: LogOut
    Given El usuario abre la pagina
    When Ingresa credenciales "standard_user" y "secret_sauce"
    And Clic en el boton de login
    Then Deberia ver el titulo del boton "Swag Labs"