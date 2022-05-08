Feature: Crear y publicar una página y poder editarla

@user1 @web
Scenario: Como usuario creo una página, la publico y la edito
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go to Pages section
  And I wait for 2 seconds
  And I create new page
  And I wait for 2 seconds
  And I click on the redact page title inputbox
  And I wait for 2 seconds
  And I enter page title "<PAGE14>"
  And I wait for 2 seconds
  And I click on the redact page paragraph inputbox
  And I enter page text "<PARRAFO>"
  And I wait for 2 seconds
  And I click on the publish menu
  And I wait for 2 seconds
  And I click on the Set it live now option
  And I wait for 2 seconds
  Then I publish new page
  And I wait for 4 seconds
  And I click on settings of page
  And I wait for 2 seconds
  And I click on page link
  And I wait for 2 seconds
  And I wait for 3 seconds
