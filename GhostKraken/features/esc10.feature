Feature: Cambiar nombre del perfil

@user1 @web
Scenario: Como usuario administrador quiero cambiar mi nombre en mi perfil
  Given I navigate to page "<URL>"
  And I wait for 3 seconds
  And I take a screenshot "esc10-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc10-02"
  And I click Sign in
  And I wait for 7 seconds
  And I take a screenshot "esc10-03"
  And I go to Staff section
  And I wait for 2 seconds
  And I take a screenshot "esc10-04"
  And I click on my profile with name "<NAME>"
  And I wait for 2 seconds
  And I take a screenshot "esc10-05"
  And I click on redact full name inputbox
  And I clear the value of the Full name inputbox
  And I take a screenshot "esc10-06"
  And I wait for 2 seconds
  And I enter text "<NAMENEW>"
  And I wait for 2 seconds
  And I take a screenshot "esc10-07"
  Then I click save
  And I wait for 2 seconds
  And I take a screenshot "esc10-08"
  And I click on my profile
  And I wait for 2 seconds
  And I take a screenshot "esc10-09"
  And I sign out
  And I wait for 2 seconds
  And I take a screenshot "esc10-10"
  And I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc10-11" 
  And I click Sign in
  And I wait for 4 seconds
  And I take a screenshot "esc10-12"
  And I go to Staff section
  And I wait for 2 seconds
  And I take a screenshot "esc10-13"
  And I click on my profile with name "<NAMENEW>"
  And I wait for 3 seconds
  And I take a screenshot "esc10-14"
  And I click on redact full name inputbox
  And I clear the value of the Full name inputbox
  And I take a screenshot "esc10-15"
  And I wait for 2 seconds
  And I enter text "<NAME>"
  And I wait for 2 seconds
  And I take a screenshot "esc10-16"
  Then I click save
  And I wait for 4 seconds
  And I take a screenshot "esc10-17"