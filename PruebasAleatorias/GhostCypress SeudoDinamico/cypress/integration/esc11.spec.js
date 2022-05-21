

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const bio = pollData01.BIOTEXT;
let count=0;

describe('Add Bio', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc11', count++);
  })
  it('Create post and delete it', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
      POM.takeScreenShot('esc11', count++);
    })
    cy.wait(1000);
    //Go to the staff owner page
    POM.elements.emailInput().should('not.exist'); 
    POM.goToStaff();
    cy.wait(1000);
    POM.takeScreenShot('esc11', count++);
    cy.get('.gh-badge.owner').click();
    cy.wait(1000);
    POM.takeScreenShot('esc11', count++);
    cy.get(`textarea[id="user-bio"]`).type(bio);
    cy.wait(1000);
    POM.takeScreenShot('esc11', count++);
    cy.get('span').contains('Save').click();
    cy.wait(1000);
    POM.takeScreenShot('esc11', count++);
    POM.elements.emailInput().should('not.exist'); 
    POM.goToStaff();
    cy.wait(1000);
    POM.takeScreenShot('esc11', count++);
    cy.get('.gh-badge.owner').click();
    cy.get('textarea[id="user-bio"]');
    POM.takeScreenShot('esc11', count++);
  })
})
