Feature: Programar publicación de post

@user1 @web
Scenario: Como usuario quiero crear un post y programar su hora de publicación (**LA PRUEBA NO FUNCIONA SI EL MINUTO EN EL QUE SE PROGRAMA LA PUBLICACIÓN DEL POST ESTA ENTRE 57 Y 59)
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  And I take a screenshot "esc07-01"
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I take a screenshot "esc07-02"
  And I click Sign in
  And I wait for 7 seconds
  And I click the icon to create new post
  And I wait for 2 seconds
  And I take a screenshot "esc07-03"
  And I click on the redact post title inputbox
  And I wait for 2 seconds
  And I enter text "<POST07>"
  And I wait for 2 seconds
  And I take a screenshot "esc07-04"
  And I click on the redact post paragraph inputbox
  And I wait for 2 seconds
  And I enter text "<PARRAFO>"
  And I wait for 2 seconds
  And I take a screenshot "esc07-05"
  And I click on the publish-update menu
  And I wait for 2 seconds
  And I take a screenshot "esc07-06"
  And I click on the redact UTC time
  And I wait for 1 seconds
  And I take a screenshot "esc07-07"
  And I delete default scheduled UTC time
  And I wait for 1 seconds
  And I set publish time for 3 minutes in the future
  And I wait for 2 seconds
  And I take a screenshot "esc07-08"
  And I submit the schedule
  And I wait for 4 seconds
  Then I should see the post in the list
  Then I return to section view
  And I wait for 2 seconds
  And I take a screenshot "esc07-09"
  And I click on View site in new tab
  And I wait for 1 seconds
  And I wait for 25 seconds
  And I wait for 25 seconds
  And I wait for 25 seconds
  And I wait for 25 seconds
  And I wait for 25 seconds
  And I wait for 25 seconds
  And I wait for 25 seconds
  And I wait for 5 seconds
  And I navigate to page "<URL-LECTOR>"
  And I wait for 5 seconds
  And I take a screenshot "esc07-10"
  Then I click on published post-page "<POST07>"
  And I wait for 4 seconds
  And I take a screenshot "esc07-11"
