Feature: Editar una página

@user1 @web
Scenario: Como usuario creo una página, la edito y la visito
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
   And I take a screenshot "esc09-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I take a screenshot "esc09-02"
  And I go to Pages section
  And I wait for 2 seconds
  And I take a screenshot "esc09-03"
  And I create new page
  And I wait for 2 seconds
  And I take a screenshot "esc09-04"
  And I click on the redact page title inputbox
  And I wait for 2 seconds
  And I enter text "<PAGE09>"
  And I wait for 2 seconds
  And I take a screenshot "esc09-05"
  And I click on the redact page paragraph inputbox
  And I enter text "<PARRAFO>"
  And I wait for 2 seconds
  And I take a screenshot "esc09-06"
  And I click on the publish-update menu
  And I wait for 2 seconds
  And I take a screenshot "esc09-07"
  And I click on the Set it live now option
  And I wait for 2 seconds
  Then I click on publish-update
  And I wait for 2 seconds
  And I take a screenshot "esc09-08"
  And I click on post-page settings
  And I wait for 2 seconds
  And I click on page link
  And I wait for 1 seconds
  And I take a screenshot "esc09-09"
  And I wait for 3 seconds
  And I navigate to page "<URL>"
  And I wait for 3 seconds
  And I take a screenshot "esc09-10"
  And I go to Pages section
  And I wait for 2 seconds
  And I take a screenshot "esc09-11"
  And I click to edit post-page-tag "<PAGE09>"
  And I wait for 2 seconds
  And I take a screenshot "esc09-12"
  And I click on the redact page title inputbox
  And I wait for 2 seconds
  And I enter text "<PAGE09>"
  And I delete page title
  And I wait for 2 seconds
  And I enter text "<PAGE09Edit>"
  And I wait for 2 seconds
  And I take a screenshot "esc09-13"
  And I click on the publish-update menu
  And I wait for 2 seconds
  And I take a screenshot "esc09-14"
  Then I click on publish-update
  And I wait for 4 seconds
  And I take a screenshot "esc09-15"
  And I click on post-page settings
  And I wait for 2 seconds
  And I take a screenshot "esc09-16"
  And I click on page link
  And I wait for 1 seconds
  And I take a screenshot "esc09-17"
  And I wait for 4 seconds
  And I take a screenshot "esc09-18"