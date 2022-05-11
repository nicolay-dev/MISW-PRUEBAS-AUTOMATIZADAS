Feature: Publicar post

@user1 @web
Scenario: Como usuario quiero crear un post y publicarlo
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I click the icon to create new post
  And I wait for 2 seconds
  And I click on the redact post title inputbox
  And I wait for 2 seconds
  And I enter text "<POST02>"
  And I wait for 2 seconds
  And I click on the redact post paragraph inputbox
  And I wait for 2 seconds
  And I enter text "<PARRAFO>"
  And I wait for 2 seconds
  And I click on the publish-update menu
  And I wait for 2 seconds
  And I click on the Set it live now option
  And I wait for 2 seconds
  Then I click on publish-update
  And I wait for 4 seconds
  And I return to section view
  And I wait for 2 seconds
  And I click on View site in new tab
  And I wait for 2 seconds
  Then I click on published post-page "<POST02>"
  And I wait for 4 seconds