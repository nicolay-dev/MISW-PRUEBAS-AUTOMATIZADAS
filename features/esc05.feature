Feature: Crear un nuevo TAG

@user1 @web
Scenario: Como usuario administrador un TAG nuevo
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
  And I enter text "TAG Esc-5"
  And I wait for 2 seconds
  Then I save my new tag
  And I wait for 2 seconds
  And I go the TAG section
  And I wait for 2 seconds
  Then I select to view recent created tag
  And I wait for 2 seconds
