Feature: Eliminar Tag

@user1 @web
Scenario: Como usuario creo un Tag, lo edito y lo elimino
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I go to Tag section
  And I wait for 2 seconds
  And I create a new TAG
  And I wait for 2 seconds
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I enter text "<TAG19>"
  And I wait for 2 seconds
  Then I click save
  And I wait for 2 seconds
  And I go to Tag section
  And I wait for 2 seconds
  Then I click to edit post-page-tag "<TAG19>"
  And I wait for 2 seconds
  And I click on the redact name inputbox
  And I wait for 2 seconds
  And I empty the inputbox
  And I wait for 1 seconds
  And I enter text "<TAG19-1>"
  And I wait for 2 seconds
  Then I click save
  And I wait for 2 seconds
  And I go to Tag section
  And I wait for 3 seconds
  Then I click to edit post-page-tag "<TAG19-1>"
  And I wait for 2 seconds
  And I click to delete TAG
  And I wait for 2 seconds
  Then I confirm deletion
  And I wait for 4 seconds