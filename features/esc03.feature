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
  And I create a new post with nav bar
  And I wait for 2 seconds
  And I click on the redact title inputbox
  And I wait for 2 seconds
  And I enter post title "<POST3>"
  And I wait for 2 seconds
  And I click on the redact paragraph inputbox
  And I enter post text "<PARRAFO>"
  And I wait for 2 seconds
  And I click on the publish menu
  And I wait for 2 seconds
  And I click on the Set it live now option
  And I wait for 2 seconds
  Then I publish new post
  And I wait for 4 seconds
  And I click on posts view
  And I wait for 2 seconds
  And I edit the created post
  And I wait for 2 seconds
  And I edit the created post
  And I wait for 2 seconds
  And I click on settings post button
  And I wait for 2 seconds
  And I click on delete button
  And I wait for 2 seconds
  Then I confirm delete action
  And I wait for 4 seconds
  