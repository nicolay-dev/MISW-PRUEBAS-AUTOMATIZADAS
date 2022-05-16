
Cypress.on('uncaught:exception', (err) => {
  // we expect a 3rd party library error with message 'n.includes is not a function'
  // and don't want to fail the test so we return false
  if (err.message.includes('n.includes is not a function')) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const passwordtest = Cypress.env('password2')
let count = 0;

describe('Change password', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc01', count++);
  })
  it('Login to ghost, change password and logout', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    POM.takeScreenShot('esc01', count++);
    //Go to the staff owner page
    POM.elements.emailInput().should('not.exist') // check if the login form is not visible
    POM.goToStaff()
    cy.wait(1000)
    POM.takeScreenShot('esc01', count++);
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)
    POM.takeScreenShot('esc01', count++);
    //change password
    cy.get('#user-password-old').type(password)
    cy.get('#user-password-new').type(passwordtest)
    cy.get('#user-new-password-verification').type(passwordtest)
    cy.get('button span:contains("Change Password")').click()

    // Logout
    cy.wait(3000)
    POM.takeScreenShot('esc01', count++);
    cy.get('button[class="gh-notification-close"]').click()
    POM.signOut()
    POM.takeScreenShot('esc01', count++);
    //Login with the new password
    POM.signIn(username, passwordtest);
    cy.wait(1000)
    POM.takeScreenShot('esc01', count++);
    cy.get(`span[class="gh-user-email"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${username}`)
    }) // check if we alreally are logged in

    //Go to the staff owner page and reset the password
    cy.wait(1000)
    POM.takeScreenShot('esc01', count++);
    POM.goToStaff()
    cy.wait(2000)
    POM.takeScreenShot('esc01', count++);
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change password
    cy.get('#user-password-old').type(passwordtest)
    cy.get('#user-password-new').type(password)
    cy.get('#user-new-password-verification').type(password)
    cy.get('button span:contains("Change Password")').click()
    POM.takeScreenShot('esc01', count++);
  })

})