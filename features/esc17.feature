Feature: Login y creación de un nuevo item del menú de navegación

@user1 @web
Scenario: Como usuario administrador quiero tener nuevo item en el menú de navegación
  Given I navigate to page "<URL>"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I navigate to design
  And I wait for 2 seconds
  And I edit the home label to Lorem
  And I wait for 2 seconds
  And I save changes to the home label
  And I wait for 2 seconds
  When I navigate to page "<createURL>"
  And I wait for 5 seconds
  Then I should see new home label Lorem
  And I wait for 2 seconds


  