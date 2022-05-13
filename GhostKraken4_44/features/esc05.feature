Feature: Crear Tag

@user1 @web
Scenario: Como usuario administrador cquiero crear un Tag
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I take a screenshot "esc05-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc05-02"
  And I click Sign in
  And I wait for 5 seconds
  And I take a screenshot "esc05-03"
  And I go to Tag section
  And I wait for 2 seconds
  And I take a screenshot "esc05-04"
  And I create a new TAG
  And I wait for 2 seconds
  And I take a screenshot "esc05-05"
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I take a screenshot "esc05-06"
  And I enter text "<TAG05>"
  And I wait for 2 seconds
  And I take a screenshot "esc05-07"
  Then I click save
  And I wait for 2 seconds
  And I take a screenshot "esc05-08"
  And I go to Tag section
  And I wait for 2 seconds
  And I take a screenshot "esc05-09"
  Then I click to edit post-page-tag "<TAG05>"
  And I wait for 2 seconds
  And I take a screenshot "esc05-10"
