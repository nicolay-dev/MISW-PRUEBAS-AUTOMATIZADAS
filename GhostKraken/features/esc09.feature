Feature: Editar una página

@user1 @web
Scenario: Como usuario creo una página, la edito y la visito
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go to Pages section
  And I wait for 2 seconds
  And I create new page
  And I wait for 2 seconds
  And I click on the redact page title inputbox
  And I wait for 2 seconds
  And I enter text "<PAGE09>"
  And I wait for 2 seconds
  And I click on the redact page paragraph inputbox
  And I enter text "<PARRAFO>"
  And I wait for 2 seconds
  And I click on the publish-update menu
  And I wait for 2 seconds
  And I click on the Set it live now option
  And I wait for 2 seconds
  Then I click on publish-update
  And I wait for 2 seconds
  And I click on post-page settings
  And I wait for 2 seconds
  And I click on page link
  And I wait for 1 seconds
  And I wait for 3 seconds
  And I navigate to page "<URL>"
  And I wait for 3 seconds
  And I go to Pages section
  And I wait for 2 seconds
  And I click to edit post-page-tag "<PAGE09>"
  And I wait for 2 seconds
  And I click on the redact page title inputbox
  And I wait for 2 seconds
  And I delete page title
  And I wait for 2 seconds
  And I enter text "<PAGE09Edit>"
  And I wait for 2 seconds
  And I click on the publish-update menu
  And I wait for 2 seconds
  Then I click on publish-update
  And I wait for 4 seconds
  And I click on post-page settings
  And I wait for 2 seconds
  And I click on page link
  And I wait for 1 seconds
  And I wait for 4 seconds