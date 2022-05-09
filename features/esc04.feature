Feature: Editar titulo de post creado

@user1 @web
Scenario: Iniciar sesión, Agregar titulo, agregar descripción, crear post, editar titulo de post y verificar el cambio. 
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
    And I enter titulo "<POST4>"
    And I wait for 2 seconds
    And I enter contenido post "<PARRAFO>"
    And I wait for 5 seconds
    And I click publish list
    And I wait for 2 seconds
    And I click publish button
    And I wait for 2 seconds
    And I click on back button
    And I wait for 2 seconds
    And I click on specific post
    And I wait for 2 seconds
    And I click publish list
    And I wait for 2 seconds
    And I click on unpublished option
    And I wait for 2 seconds
    And I click on update
    And I wait for 2 seconds
    And I select tittle "<POST4_1>"
    And I wait for 1 seconds
    And I click on space
    And I wait for 1 seconds    
    And I click publish list
    And I wait for 2 seconds
    And I click publish button
    And I wait for 2 seconds
    And I click on back button
    And I wait for 2 seconds
    And I click on post-published
    And I wait for 2 seconds
    And I verify return of title of test
    And I wait for 2 seconds

