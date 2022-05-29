Feature: Crear un post con excerpt

@user2 @web
Scenario: Como usuario quiero crear un post que contenga un excerpt
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    And I take a screenshot "esc12-01"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I take a screenshot "esc12-02"
    And I click Sign in
    And I wait for 5 seconds
    And I take a screenshot "esc12-03"
    And I click the icon to create new post
    And I wait for 2 seconds
    And I take a screenshot "esc12-04"
    And I click on the redact post title inputbox
    And I wait for 2 seconds
    And I enter text "<POST12>"
    And I wait for 2 seconds
    And I take a screenshot "esc12-05"
    And I click on the redact post paragraph inputbox
    And I wait for 2 seconds
    And I enter text "<PARRAFO>"
    And I wait for 2 seconds
    And I take a screenshot "esc12-06"
    And I click on post-page settings
    And I wait for 2 seconds
    And I click on the redact excerpt inputbox
    And I wait for 2 seconds
    And I enter text "<EXCERPT>"
    And I wait for 2 seconds
    And I take a screenshot "esc12-07"
    And I close settings
    And I wait for 2 seconds
    And I take a screenshot "esc12-08"
    And I click on the publish-update menu
    And I wait for 2 seconds
    And I take a screenshot "esc12-09"
    Then I click on publish-update
    And I wait for 4 seconds
    And I return to section view
    And I wait for 2 seconds
    And I take a screenshot "esc12-10"
    And I click on View site in new tab
    And I wait for 2 seconds
    Then I click on published post-page "<POST12>"
    And I wait for 4 seconds
    And I take a screenshot "esc12-11"

    
