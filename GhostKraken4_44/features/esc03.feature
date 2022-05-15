Feature: Eliminar un post

@user1 @web
Scenario: Como usuario creo un post, lo publico y lo elimino
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I take a screenshot "esc03-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc03-02"
  And I click Sign in
  And I wait for 5 seconds
  And I take a screenshot "esc03-03"
  And I click the icon to create new post
  And I wait for 2 seconds
  And I take a screenshot "esc03-04"
  And I click on the redact post title inputbox
  And I wait for 2 seconds
  And I enter text "<POST03>"
  And I wait for 2 seconds
  And I take a screenshot "esc03-05"
  And I click on the redact post paragraph inputbox
  And I wait for 2 seconds
  And I enter text "<PARRAFO>"
  And I wait for 2 seconds
  And I take a screenshot "esc03-06"
  And I click on the publish-update menu
  And I wait for 2 seconds
  And I take a screenshot "esc03-07"
  And I click on the Set it live now option
  And I wait for 2 seconds
  And I take a screenshot "esc03-08"
  Then I click on publish-update
  And I wait for 1 seconds
  And I confirm publish-update
  And I wait for 4 seconds
  And I take a screenshot "esc03-09"
  And I return to section view
  And I wait for 2 seconds
  And I take a screenshot "esc03-10"
  And I click on View site in new tab
  And I wait for 2 seconds
  And I take a screenshot "esc03-11"
  Then I click on published post-page "<POST03>"
  And I wait for 4 seconds
  And I take a screenshot "esc03-12"
  And I navigate to page "<URL>"
  And I wait for 3 seconds
  And I take a screenshot "esc03-13"
  And I go to Posts section
  And I wait for 2 seconds
  And I take a screenshot "esc03-14"
  And I click to edit post-page-tag "<POST03>"
  And I wait for 2 seconds
  And I take a screenshot "esc03-15"
  And I click on post-page settings
  And I wait for 2 seconds
  And I take a screenshot "esc03-16"
  And I click on delete page-post
  And I wait for 2 seconds
  And I take a screenshot "esc03-17"
  Then I confirm deletion
  And I wait for 3 seconds
  And I take a screenshot "esc03-18"
  And I click on View site in new tab
  And I wait for 2 seconds
  And I wait for 2 seconds
  And I take a screenshot "esc03-19"

  