
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
    
  it('21-Login to ghost, go to profile, change user name and slug, validate', function() {
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
    cy.get('#user-name').clear()
    cy.get('#user-name').type(this.data.apriori[0].username, { force: true })
    cy.get('#user-slug').clear()
    cy.get('#user-slug').type(this.data.apriori[0].slug, { force: true })
    POM.elements.save().click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)

    cy.get(`span[class="gh-user-name mb1"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.apriori[0].username}`)
    }) // check id the username is changed
    cy.xpath(`//p[normalize-space()='${url}author/${this.data.apriori[0].slug}']`).should('exist') // check if the slug is changed

    //Go to the staff owner page and reset the password
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-name').clear()
    cy.get('#user-name').type(nombre, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })



})
