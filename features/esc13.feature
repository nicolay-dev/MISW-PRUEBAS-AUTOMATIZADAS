Feature: Modificar zona horaria

@user1 @web
Scenario: Como usuario quiero cambiar mi zona horaria
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go to General settings
  And I wait for 2 seconds
  And I click on Site timezone
  And I wait for 2 seconds
  And I select timezone "<TIMEZONENEW>"
  And I wait for 4 seconds
  And I click Save settings
  And I wait for 2 seconds
  And I click on my profile
  And I wait for 2 seconds
  And I sign out
  And I wait for 2 seconds
  And I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go to General settings
  And I wait for 2 seconds
  And I click on Site timezone
  And I wait for 2 seconds
  And I select timezone "<TIMEZONEUTC>"
  And I wait for 4 seconds
  And I click Save settings
  And I wait for 4 seconds
  
