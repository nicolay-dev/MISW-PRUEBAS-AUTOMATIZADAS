Feature: Agregar tarjeta de Twitter a un post

@user1 @web
Scenario: Como usuario quiero crear un post con una tarjeta de Twitter
    Given I navigate to page "<URL>"
    And I wait for 5 seconds
    And I take a screenshot "esc16-01"
    When I enter email "<USERNAME>"
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I take a screenshot "esc16-02"
    And I click Sign in
    And I wait for 7 seconds
    And I click the icon to create new post
    And I wait for 2 seconds
    And I take a screenshot "esc16-03"
    And I click on the redact post title inputbox
    And I wait for 2 seconds
    And I enter text "<POST16>"
    And I wait for 2 seconds
    And I take a screenshot "esc16-04"
    And I click on the redact post paragraph inputbox
    And I wait for 2 seconds
    And I enter text "<PARRAFO>"
    And I wait for 2 seconds
    And I take a screenshot "esc16-05"
    And I click on post-page settings
    And I wait for 2 seconds
    And I take a screenshot "esc16-06"
    And I click Twitter card
    And I wait for 2 seconds
    And I take a screenshot "esc16-07"
    And I click on the redact Twitter title inputbox
    And I wait for 2 seconds
    And I enter text "<TWITTERC>"
    And I wait for 2 seconds
    And I take a screenshot "esc16-08"
    And I go back to settings
    And I wait for 2 seconds
    And I take a screenshot "esc16-09"
    And I close settings
    And I wait for 2 seconds
    And I take a screenshot "esc16-10"
    And I click on the publish-update menu
    And I wait for 2 seconds
    And I take a screenshot "esc16-11"
    And I click on the Set it live now option
    And I wait for 2 seconds
    Then I click on publish-update
    And I wait for 4 seconds
    And I take a screenshot "esc16-12"
    And I return to section view
    And I wait for 2 seconds
    And I take a screenshot "esc16-13"
    And I click on View site in new tab
    And I wait for 2 seconds
    And I take a screenshot "esc16-14"
    Then I click on published post-page "<POST16>"
    And I wait for 4 seconds
    And I take a screenshot "esc16-15"
    
