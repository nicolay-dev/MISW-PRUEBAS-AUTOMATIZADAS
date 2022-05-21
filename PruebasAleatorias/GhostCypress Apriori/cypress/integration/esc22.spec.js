
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
const pollData01 = Cypress.env('poolData01');
const url = pollData01.URLLECTOR;
const username = pollData01.username;
const password = pollData01.password;
const nombre = pollData01.NAME; 

describe('Change password', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    cy.fixture('apriori').then(function (data) {
      this.data = data
  })
})
    
  it('22-Login to ghost, go to profile, change email, validate', function() {
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
    
    //change username and slug
    cy.get('#user-email').clear()
    cy.get('#user-email').type(this.data.apriori[0].email, { force: true })
  
    POM.elements.save().click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)

    cy.get(`span[class="gh-user-email"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.apriori[0].email}`)
    }) // check if the email is changed
  

    //Go to the staff owner page and reset the email
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-email').clear()
    cy.get('#user-email').type(username, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })



})
