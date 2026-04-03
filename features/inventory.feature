@Inventory
Feature: Inventory

Scenario: Agregar todos los productos al carrito
  Given El usuario abre la pagina
  When Ingresa credenciales "standard_user" y "secret_sauce"
  And Clic en el boton de login
  And Agrega todos los productos disponibles al carrito
  When El usuario abre el carrito de compras
  Then Deberían aparecer los 6 productos en la lista del carrito