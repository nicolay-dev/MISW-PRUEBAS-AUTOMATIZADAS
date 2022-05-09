Feature: Crear un excerpt en el post

@user2 @web
Scenario: Iniciar sesión, crear un post, agregar titulo, agregar parrafo, agregar excerpt y publicar post. 
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
    And I enter titulo "<POST12>"
    And I wait for 2 seconds
    And I enter contenido post "<PARRAFO>"
    And I wait for 2 seconds
    And I click on space
    And I wait for 2 seconds
    And I click settings-button f12
    And I wait for 2 seconds
    And I enter excerpt settings-f12 "<EXCERPT>"
    And I wait for 2 seconds
    And I click on space
    And I wait for 2 seconds
    And I click publish list
    And I wait for 2 seconds
    And I click publish button
    And I wait for 2 seconds
    And I click on back button

    
