Feature: Crear Tag

@user1 @web
Scenario: Como usuario administrador cquiero crear un Tag
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go to Tag section
  And I wait for 2 seconds
  And I create a new TAG
  And I wait for 2 seconds
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I enter text "<TAG05>"
  And I wait for 2 seconds
  Then I click save
  And I wait for 2 seconds
  And I go to Tag section
  And I wait for 2 seconds
  Then I click to edit post-page-tag "<TAG05>"
  And I wait for 2 seconds
