Feature: Cambiar contraseña

@user1 @web
Scenario: Como usuario quiero cambiar mi contrasenia
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
  And I click on the redact old password inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORD>"
  And I wait for 2 seconds
  And I click on the redact new password inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORDNEW>"
  And I wait for 2 seconds
  And I click on the redact new password verification inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORDNEW>"
  And I wait for 2 seconds
  Then I click change password
  And I wait for 10 seconds
  And I click on my profile
  And I wait for 2 seconds
  And I sign out
  And I wait for 7 seconds
  And I enter email "<USERNAME>"
  And I enter password "<PASSWORDNEW>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go to Staff section
  And I wait for 2 seconds
  And I click on my profile with name "<NAME>"
  And I wait for 2 seconds
  And I click on the redact old password inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORDNEW>"
  And I wait for 2 seconds
  And I click on the redact new password inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORD>"
  And I wait for 2 seconds
  And I click on the redact new password verification inputbox
  And I wait for 2 seconds
  And I enter text "<PASSWORD>"
  And I wait for 2 seconds
  Then I click change password
  And I wait for 3 seconds
