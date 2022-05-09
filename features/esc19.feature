Feature: Crear un nuevo TAG y editarlo

@user1 @web
Scenario: Como usuario administrador un TAG nuevo y editarlo
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go the TAG section
  And I wait for 2 seconds
  And I create a new TAG
  And I wait for 2 seconds
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I enter text "TAG Esc-15"
  And I wait for 2 seconds
  Then I save my new tag
  And I wait for 2 seconds
  And I go the TAG section
  And I wait for 2 seconds
  Then I click to view recent created tag
  And I wait for 2 seconds
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I empty the inputbox
  And I enter text "TAG Esc-15v2"
  And I wait for 2 seconds
  Then I save my new tag
  And I wait for 2 seconds
  And I go the TAG section
  And I wait for 2 seconds
  Then I click to view recent created tag
  And I wait for 2 seconds
  And I click to delete TAG
  And I wait for 2 seconds
  Then I confirm deletion of TAG
  And I wait for 4 seconds