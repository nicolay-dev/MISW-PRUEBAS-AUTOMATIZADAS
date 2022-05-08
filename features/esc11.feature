Feature: Crear y Eliminar un post

@user1 @web
Scenario: Como usuario inicio sesión, creo un post, lo publico y lo elimino
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I click on my profile
  And I wait for 2 seconds
  And I click on your profile tab
  And I click on bio text area
  And I enter bio text
  Then I save the modifications
  And I wait for 2 seconds