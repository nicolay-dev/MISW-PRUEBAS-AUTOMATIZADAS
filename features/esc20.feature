Feature: Iniciar una conversación

@user1 @web
Scenario: Como primer usuario inicio sesion y mandó un mensaje al usuario 2
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
    And I enter titulo "<POST20>"
    And I wait for 2 seconds
    And I enter contenido post "<PARRAFO>"
    And I wait for 2 seconds
    And I click on space
    And I wait for 2 seconds
    And I click settings-button f20
    And I wait for 2 seconds
    And I click Facebook-Card f20
    And I wait for 2 seconds
    And I enter Facebook-Card-Title f20 "<FACEBOOKC>"
    And I wait for 2 seconds
    And I click on space
    And I wait for 2 seconds
    And I click publish list
    And I wait for 2 seconds
    And I click publish button
    And I wait for 2 seconds
    And I click on back button

    
