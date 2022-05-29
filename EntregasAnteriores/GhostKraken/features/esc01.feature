Feature: Cambiar contraseña

@user1 @web
Scenario: Como usuario quiero cambiar mi contrasenia
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I take a screenshot "esc01-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc01-02"
  And I click Sign in
  And I wait for 7 seconds
  And I take a screenshot "esc01-03"
  And I go to Staff section
  And I wait for 2 seconds
  And I take a screenshot "esc01-04"
  And I click on my profile with name "<NAME>"
  And I wait for 2 seconds
  And I take a screenshot "esc01-05"
  And I click on the redact old password inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc01-06"
  And I click on the redact new password inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORDNEW>"
  And I wait for 2 seconds
  And I take a screenshot "esc01-07"
  And I click on the redact new password verification inputbox
  And I wait for 2 seconds
  And I take a screenshot "esc01-07"
  And I enter text "<PASSWORDNEW>"
  And I wait for 2 seconds
  Then I click change password
  And I take a screenshot "esc01-08"
  And I wait for 10 seconds
  And I click on my profile
  And I wait for 2 seconds
  And I take a screenshot "esc01-09"
  And I sign out
  Then I take a screenshot "esc01-10"
  And I wait for 7 seconds
  And I enter email "<USERNAME>"
  And I enter password "<PASSWORDNEW>"
  And I wait for 2 seconds
  And I take a screenshot "esc01-11"
  And I click Sign in
  And I wait for 7 seconds
  And I take a screenshot "esc01-12"
  And I go to Staff section
  And I wait for 2 seconds
  And I take a screenshot "esc01-13"
  And I click on my profile with name "<NAME>"
  And I wait for 2 seconds
  And I take a screenshot "esc01-14"
  And I click on the redact old password inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORDNEW>"
  And I wait for 2 seconds
  And I take a screenshot "esc01-15"
  And I click on the redact new password inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc01-16"
  And I click on the redact new password verification inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc01-17"
  Then I click change password
  And I wait for 3 seconds
  And I take a screenshot "esc01-18"
  And I wait for 4 seconds