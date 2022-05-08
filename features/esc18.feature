Feature: Crear, publicar un post y "des-publicarlo"

@user1 @web
Scenario: Como usuario inicio sesión, creo un post, lo publico y los "des-publico"
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I wait for 2 seconds
  And I click Sign in
  And I wait for 7 seconds
  And I create a new post with nav bar
  And I wait for 2 seconds
  And I click on the redact title inputbox
  And I wait for 2 seconds
  And I enter post title "<POST18>"
  And I wait for 2 seconds
  And I click on the redact paragraph inputbox
  And I enter text "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida scelerisque ex quis pellentesque. Vivamus eget eros vitae tellus consectetur porttitor. Pellentesque dui ligula, consequat quis feugiat nec, maximus ut tortor. Nam massa mauris, congue id pulvinar eget, iaculis sed sapien. Etiam ullamcorper commodo sagittis. Duis purus lacus, suscipit quis libero eget, tempus imperdiet nisl. Quisque arcu nibh, volutpat sed urna sit amet, lobortis molestie massa. Phasellus posuere, metus non aliquam scelerisque, velit magna tristique urna, in consequat lectus lorem a magna. Aenean condimentum ornare orci non consequat."
  And I wait for 2 seconds
  And I click on the publish menu
  And I wait for 2 seconds
  And I click on the Set it live now option
  And I wait for 2 seconds
  Then I publish new post
  And I wait for 4 seconds
  And I return to posts view
  And I wait for 2 seconds
  And I click on View site
  And I wait for 2 seconds
  Then I click on created post "<POST18>"
  And I wait for 4 seconds
  And I navigate to page "http://localhost:2368/ghost/"
  And I wait for 2 seconds
  And I go to Posts section
  And I wait for 2 seconds
  And I click to edit new post "<POST18>"
  And I wait for 2 seconds
  And I click on the publish menu
  And I wait for 2 seconds
  And I click on the Unpublished option
  And I wait for 2 seconds
  Then I unpublish new post
  And I wait for 3 seconds
  And I return to posts view
  And I wait for 3 seconds
  And I click on View site
  And I wait for 2 seconds
  And I wait for 3 seconds