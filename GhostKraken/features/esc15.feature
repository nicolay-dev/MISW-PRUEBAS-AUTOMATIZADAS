Feature: Editar Tag

@user1 @web
Scenario: Como usuario queiro crear un Tag y editarlo
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I take a screenshot "esc15-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc15-02"
  And I click Sign in
  And I wait for 7 seconds
  And I take a screenshot "esc15-03"
  And I go to Tag section
  And I wait for 2 seconds
  And I take a screenshot "esc15-04"
  And I create a new TAG
  And I wait for 2 seconds
  And I take a screenshot "esc15-05"
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I enter text "<TAG15>"
  And I wait for 2 seconds
  And I take a screenshot "esc15-06"
  Then I click save
  And I wait for 2 seconds
  And I take a screenshot "esc15-07"
  And I go to Tag section
  And I wait for 2 seconds
  And I take a screenshot "esc15-08"
  Then I click to edit post-page-tag "<TAG15>"
  And I wait for 2 seconds
  And I take a screenshot "esc15-09"
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I empty the inputbox
  And I wait for 1 seconds
  And I take a screenshot "esc15-10"
  And I enter text "<TAG15-1>"
  And I wait for 2 seconds
  And I take a screenshot "esc15-11"
  Then I click save
  And I wait for 2 seconds
  And I take a screenshot "esc15-12"
  And I go to Tag section
  And I wait for 3 seconds
  And I take a screenshot "esc15-13"
