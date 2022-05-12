
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
  const nombre = Cypress.env('NAME')
  const nombreNew = Cypress.env('NAMENEW')
  
  describe('Change Profile name', () => {
    beforeEach(() => {
      cy.visit("/")
      cy.wait(4000)
    })
    it('Login to ghost, change password and logout', () => {
      cy.get('form').within(() => {
        POM.signIn(username, password);
      })
      cy.wait(1000)
      //Go to the staff owner page
      POM.elements.emailInput().should('not.exist') // check if the login form is not visible
      POM.goToStaff()
      cy.wait(1000)
      cy.get('.gh-badge.owner').click()
      cy.wait(1000)
      //change full name
      cy.get('input[placeholder="Full Name"]').clear()
      cy.get('input[placeholder="Full Name"]').type(nombreNew, { force: true })
      cy.wait(1000)
      POM.elements.save().click()
  
      // Logout
      cy.wait(3000)
      POM.signOut()
      //Login again
      POM.signIn(username, password);
      cy.wait(1000)
      cy.get(`span[class="gh-user-email"]`).then(($user) => {
        expect($user[0].innerText).to.equal(`${username}`)
      }) // check if we alreally are logged in
  
      //Go to the staff owner page and reset the password
      cy.wait(1000)
      POM.goToStaff()
      cy.wait(2000)
      cy.get('.gh-badge.owner').click()
      cy.wait(2000)
      //change password
      cy.get('input[placeholder="Full Name"]').clear()
      cy.get('input[placeholder="Full Name"]').type(nombre, { force: true })
      cy.wait(1000)
      POM.elements.save().click()
  
    })
  
  })