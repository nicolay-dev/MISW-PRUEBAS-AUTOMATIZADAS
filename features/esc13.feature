Feature: Login y cambiar zona horarioa

@user1 @web
Scenario: Como usuario administrador quiero cambiar mi zona horaria
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I click to settings
  And I wait for 2 seconds
  And I click to timezone
  And I wait for 2 seconds
  And I select timezone "<TIMEZONE>"
  And I wait for 4 seconds
  And I click to save Settings
  And I wait for 2 seconds
  
