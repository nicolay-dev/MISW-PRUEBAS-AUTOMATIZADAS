Feature: Asociar Post Y Tag

@user1 @web
Scenario: Como usuario administrador creo un post con un Tag
  Given I navigate to page "<URL>"
  And I wait for 3 seconds
  And I take a screenshot "esc06-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc06-02"
  And I click Sign in
  And I wait for 4 seconds
  And I take a screenshot "esc06-03"
  And I click the icon to create new post
  And I wait for 2 seconds
  And I take a screenshot "esc06-04"
  And I click on the redact post title inputbox
  And I wait for 1 seconds
  And I enter text "<POST06>"
  And I take a screenshot "esc06-05"
  And I wait for 1 seconds
  And I click on the redact post paragraph inputbox
  And I enter text "<PARRAFO>"
  And I take a screenshot "esc06-06"
  And I wait for 1 seconds
  And I click on the publish-update menu
  And I wait for 2 seconds
  And I take a screenshot "esc06-07"
  And I click on the Set it live now option
  And I wait for 2 seconds
  Then I click on publish-update
  And I wait for 3 seconds
  And I take a screenshot "esc06-08"
  And I return to section view
  And I wait for 2 seconds
  And I take a screenshot "esc06-09"
  And I go to Tag section
  And I wait for 2 seconds
  And I take a screenshot "esc06-10"
  And I create a new TAG
  And I wait for 2 seconds
  And I take a screenshot "esc06-11"
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I enter text "<TAG06>"
  And I wait for 2 seconds
  And I take a screenshot "esc06-12"
  Then I click save
  And I wait for 2 seconds
  And I take a screenshot "esc06-13"
  And I go to Posts section
  And I wait for 2 seconds
  And I take a screenshot "esc06-14"
  And I click to edit post-page-tag "<POST06>"
  And I wait for 2 seconds    
  And I click on post-page settings
  And I wait for 2 seconds
  And I take a screenshot "esc06-15"
  And I click on the redact TAG inputbox
  And I wait for 2 seconds
  And I enter text "<TAG06>"
  And I take a screenshot "esc06-16"
  And I wait for 2 seconds
  And I click the created TAG "<TAG06>"
  And I wait for 2 seconds
  And I take a screenshot "esc06-17"
  And I close settings
  And I wait for 2 seconds
  And I take a screenshot "esc06-18"
  And I click on the publish-update menu
  And I wait for 2 seconds
  And I take a screenshot "esc06-19"
  Then I click on publish-update
  And I wait for 4 seconds
  And I take a screenshot "esc06-20"
  And I return to section view
  And I wait for 2 seconds
  And I take a screenshot "esc06-21"
  And I click on View site in new tab
  And I wait for 2 seconds
  And I take a screenshot "esc06-22"
  Then I click on TAG "<TAG06>"
  And I wait for 2 seconds
  And I take a screenshot "esc06-23"
  Then I click on post-page "<POST06>" from TAG
  And I wait for 2 seconds
  And I take a screenshot "esc06-24"