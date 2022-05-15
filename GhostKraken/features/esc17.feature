Feature: Editar label

@user1 @web
Scenario: Como usuario quiero editar un label del menú de navegación
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I take a screenshot "esc17-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc17-02"
  And I click Sign in
  And I wait for 7 seconds
  And I take a screenshot "esc17-03"
  And I go to Design settings
  And I wait for 2 seconds
  And I take a screenshot "esc17-04"
  And I click on the author label
  And I wait for 2 seconds
  And I take a screenshot "esc17-05"
  And I delete author label
  And I wait for 2 seconds
  And I enter text "<LABEL17>"
  And I wait for 2 seconds
  And I take a screenshot "esc17-06"
  Then I click save
  And I wait for 2 seconds
  And I take a screenshot "esc17-07"
  When I navigate to page "<URL-LECTOR>"
  And I wait for 5 seconds
  And I take a screenshot "esc17-08"
  Then I click on label "<LABEL17>"
  And I wait for 4 seconds
  And I take a screenshot "esc17-09"
   And I wait for 4 seconds

  