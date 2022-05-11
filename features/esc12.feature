Feature: Crear un post con excerpt

@user2 @web
Scenario: Como usuario quiero crear un post que contenga un excerpt
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click Sign in
    And I wait for 5 seconds
    And I click the icon to create new post
    And I wait for 2 seconds
    And I click on the redact post title inputbox
    And I wait for 2 seconds
    And I enter text "<POST12>"
    And I wait for 2 seconds
    And I click on the redact post paragraph inputbox
    And I wait for 2 seconds
    And I enter text "<PARRAFO>"
    And I wait for 2 seconds
    And I click on post-page settings
    And I wait for 2 seconds
    And I click on the redact excerpt inputbox
    And I wait for 2 seconds
    And I enter text "<EXCERPT>"
    And I wait for 2 seconds
    And I close settings
    And I wait for 2 seconds
    And I click on the publish-update menu
    And I wait for 2 seconds
    Then I click on publish-update
    And I wait for 4 seconds
    And I return to section view
    And I wait for 2 seconds
    And I click on View site in new tab
    And I wait for 2 seconds
    Then I click on published post-page "<POST12>"
    And I wait for 4 seconds

    
