Feature: Editar post

@user1 @web
Scenario: Como usuario quiero crear un post, publicarlo y editarlo
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click Sign in
    And I wait for 2 seconds
    And I click the icon to create new post
    And I wait for 2 seconds
    And I click on the redact post title inputbox
    And I wait for 2 seconds
    And I enter text "<POST04>"
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
    Then I click on published post-page "<POST04>"
    And I wait for 4 seconds
    And I navigate to page "http://localhost:2368/ghost/"
    And I wait for 3 seconds
    And I go to Posts section
    And I wait for 2 seconds
    And I click to edit post-page-tag "<POST04>"
    And I wait for 2 seconds
    And I click on the redact post title inputbox
    And I wait for 1 seconds
    And I delete current post title
    And I wait for 2 seconds
    And I enter text "<POST04_1>"
    And I wait for 2 seconds
    And I click on the publish-update menu
    And I wait for 2 seconds
    Then I click on publish-update
    And I wait for 4 seconds
    And I return to section view
    And I wait for 2 seconds
    And I click on View site in new tab
    And I wait for 2 seconds
    Then I click on published post-page "<POST04_1>"
    And I wait for 1 seconds
    And I wait for 3 seconds
   