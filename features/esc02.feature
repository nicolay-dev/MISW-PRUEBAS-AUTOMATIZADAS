Feature: Crear y publicar un post

@user1 @web
Scenario: Como usuario inicio sesión, creo un post y lo publico
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
  And I enter post title "<POST2>"
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
  And I return to posts view
  And I wait for 2 seconds
  And I click on View site
  And I wait for 2 seconds
  Then I click on created post "<POST2>"
  And I wait for 4 seconds