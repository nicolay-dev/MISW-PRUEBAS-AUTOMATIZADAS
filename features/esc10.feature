Feature: Cambiar el nombre del perfil propio

@user1 @web
Scenario: Como usuario administrador quiero cambiar mi nombre en mi perfil
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go the Staff section
  And I wait for 2 seconds
  And I click on my profile with name "<BeforeName>"
  And I wait for 2 seconds
  And I click on redact full name inputbox
  And I clear the value of the Full name inputbox
  And I wait for 2 seconds
  And I enter text "<AfterName>"
  And I wait for 2 seconds
  Then I click save
  And I wait for 2 seconds
  And I click on my profile
  And I wait for 2 seconds
  And I sign out
  And I wait for 2 seconds
  And I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go the Staff section
  And I wait for 2 seconds
  And I click on my profile with name "<AfterName>"
  And I wait for 3 seconds
