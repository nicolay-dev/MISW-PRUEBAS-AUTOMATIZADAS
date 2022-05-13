Feature: Modificar zona horaria

@user1 @web
Scenario: Como usuario quiero cambiar mi zona horaria
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I take a screenshot "esc13-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I take a screenshot "esc12-02"
  And I go to General settings
  And I wait for 2 seconds
  And I take a screenshot "esc12-03"
  And I click on Site timezone
  And I wait for 2 seconds
  And I take a screenshot "esc12-04"
  And I select timezone "<TIMEZONENEW>"
  And I wait for 4 seconds
  And I take a screenshot "esc12-05"
  And I click Save settings
  And I wait for 2 seconds
  And I take a screenshot "esc12-06"
  And I click on my profile
  And I wait for 2 seconds
  And I take a screenshot "esc12-07"
  And I sign out
  And I wait for 2 seconds
  And I take a screenshot "esc12-08"
  And I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc12-09"
  And I click Sign in
  And I wait for 7 seconds
  And I go to General settings
  And I wait for 2 seconds
  And I take a screenshot "esc12-10"
  And I click on Site timezone
  And I wait for 2 seconds
  And I take a screenshot "esc12-11"
  And I select timezone "<TIMEZONEUTC>"
  And I wait for 4 seconds
  And I take a screenshot "esc12-12"
  And I click Save settings
  And I wait for 4 seconds
  And I take a screenshot "esc12-13"
  
