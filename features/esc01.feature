Feature: Login y cambiar contrasenia

@user1 @web
Scenario: Como usuario administrador quiero cambiar mi contrasenia
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go the Staff section
  And I wait for 2 seconds
  And I click on my profile name
  And I wait for 4 seconds
  And I enter old password "<PASSWORD1>"
  And I wait for 2 seconds
  And I enter new password "<PASSWORDNEW>"
  And I wait for 2 seconds
  And I confirm new password "<PASSWORDNEW>"
  And I wait for 4 seconds
  And I click in save change 
  And I wait for 7 seconds
  And I click in botton name
  And I wait for 7 seconds
  And I click signout
  And I wait for 7 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORDNEW>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go the Staff section
  And I wait for 2 seconds
  And I click on my profile name
  And I wait for 4 seconds
  And I enter old password "<PASSWORDNEW>"
  And I wait for 2 seconds
  And I enter new password "<PASSWORD1>"
  And I wait for 2 seconds
  And I confirm new password "<PASSWORD1>"
  And I wait for 4 seconds
  And I click in save change 
  And I wait for 7 seconds
