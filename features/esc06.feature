Feature: Crear y publicar un post con TAG

@user1 @web
Scenario: Como usuario administrador creo un post con un TAG
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
  And I enter post title "<POST6>"
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
  And I go the TAG section
  And I wait for 2 seconds
  And I create a new TAG
  And I wait for 2 seconds
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I enter text "TAG Esc-6"
  And I wait for 2 seconds
  Then I save my new tag
  And I wait for 2 seconds
  And I go to Posts section
  And I wait for 2 seconds
  And I click to edit new post "<POST6>"
  And I wait for 2 seconds
  And I click on settings of post
  And I wait for 2 seconds
  And I click on the redact TAG inputbox
  And I wait for 2 seconds
  And I enter text "TAG Esc-6"
  And I wait for 2 seconds
  And I click the created TAG
  And I wait for 2 seconds
  And I close settings
  And I wait for 2 seconds
  And I click on the publish menu
  And I wait for 2 seconds
  Then I publish new post
  And I wait for 4 seconds
  And I return to posts view
  And I wait for 2 seconds
  And I click on View site
  And I wait for 2 seconds
  Then I click on created TAG
  And I wait for 2 seconds
  Then I click on post from TAG
  And I wait for 2 seconds