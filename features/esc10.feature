Feature: Cambiar nombre del perfil

@user1 @web
Scenario: Como usuario administrador quiero cambiar mi nombre en mi perfil
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go to Staff section
  And I wait for 2 seconds
  And I click on my profile with name "<NAME>"
  And I wait for 2 seconds
  And I click on redact full name inputbox
  And I clear the value of the Full name inputbox
  And I wait for 2 seconds
  And I enter text "<NAMENEW>"
  And I wait for 2 seconds
  Then I click save
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
  And I go to Staff section
  And I wait for 2 seconds
  And I click on my profile with name "<NAMENEW>"
  And I wait for 3 seconds
  And I click on redact full name inputbox
  And I clear the value of the Full name inputbox
  And I wait for 2 seconds
  And I enter text "<NAME>"
  And I wait for 2 seconds
  Then I click save
  And I wait for 4 seconds
