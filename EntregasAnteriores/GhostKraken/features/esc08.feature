Feature: Crear un post en borrador

@user1 @web
Scenario: Como usuario queiro crean un post y guaradrlo como borrador
    Given I navigate to page "<URL>"
    And I wait for 3 seconds
    And I take a screenshot "esc08-01"
    When I enter email "<USERNAME>"
    And I wait for 2 seconds
    And I enter password "<PASSWORD>"
    And I wait for 2 seconds
    And I click Sign in
    And I wait for 2 seconds
    And I take a screenshot "esc08-02"
    And I click the icon to create new post
    And I wait for 2 seconds
    And I take a screenshot "esc08-03"
    And I click on the redact post title inputbox
    And I wait for 2 seconds
    And I enter text "<POST08>"
    And I wait for 2 seconds
    And I take a screenshot "esc08-04"
    And I click on the redact post paragraph inputbox
    And I wait for 2 seconds
    And I enter text "<PARRAFO>"
    And I wait for 2 seconds
    And I take a screenshot "esc08-05"
    Then I return to section view
    And I wait for 2 seconds
    And I extend to see posts types
    And I wait for 1 seconds
    And I take a screenshot "esc08-06"
    And I click on Drafts section
    And I wait for 2 seconds
    And I take a screenshot "esc08-07"
    Then I click to edit post-page-tag "<POST08>"
    And I wait for 2 seconds
     And I take a screenshot "esc08-08"
