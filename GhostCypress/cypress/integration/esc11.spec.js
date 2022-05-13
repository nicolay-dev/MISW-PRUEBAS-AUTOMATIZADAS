

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const bio = Cypress.env('BIO-TEXT')

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
  })
  it('Create post and delete it', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000);
    //Go to the staff owner page
    POM.elements.emailInput().should('not.exist'); 
    POM.goToStaff();
    cy.wait(1000);
    cy.get('.gh-badge.owner').click();
    cy.wait(1000);
    cy.get(`textarea[id="user-bio"]`).type(bio);
    cy.wait(1000);
    cy.get('span').contains('Save').click();
    cy.wait(1000);
    POM.elements.emailInput().should('not.exist'); 
    POM.goToStaff();
    cy.wait(1000);
    cy.get('.gh-badge.owner').click();
    cy.get('textarea[id="user-bio"]');
  })
})
