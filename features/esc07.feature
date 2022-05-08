Feature: Crear y Eliminar un post

@user1 @web
Scenario: Como usuario inicio sesión, creo un post, lo publico y lo elimino
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I create a new post with nav bar
  And I wait for 2 seconds
  And I click on the redact title inputbox
  And I wait for 2 seconds
  And I enter post title "<POST7>"
  And I wait for 2 seconds
  And I click on the redact paragraph inputbox
  And I enter post text "<PARRAFO>"
  And I wait for 2 seconds
  And I click on the publish menu
  And I wait for 2 seconds
  And I scheduled the publish
  And I wait for 2 seconds
  And I edit the time
  And I wait for 2 seconds
  And I submit the schedule
  And I wait for 240 seconds
  Then I go to post view
  And I wait for 2 seconds
