Feature: Crear un post en borrador

@user1 @web
Scenario: Iniciar sesión, crear un post, agregar titulo, agregar parrafo, guardarlo en borradores y verificar existencia. 
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME1>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD1>"
    And I wait for 2 seconds
    And I click next
    And I wait for 2 seconds
    And I click crear post
    And I wait for 2 seconds
    And I enter titulo "<POST8>"
    And I wait for 2 seconds
    And I enter contenido post "<PARRAFO>"
    And I wait for 2 seconds
    And I click on back button
    And I wait for 2 seconds
    And I click on drafts button
    And I wait for 2 seconds
    And I click on draft post if exist
    And I wait for 2 seconds
    
