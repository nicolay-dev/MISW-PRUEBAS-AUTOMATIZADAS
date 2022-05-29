

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');
const takeScreenshots = false;

const username = pollData01.username;
const password = pollData01.password;
const bio = pollData01.BIOTEXT;
let screenShotCount=0;

describe('Add Bio', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    takeScreenshots ? POM.takeScreenShot('esc11', screenShotCount++): {};
  })
  it('Agregar bio', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
      takeScreenshots ? POM.takeScreenShot('esc11', screenShotCount++): {};
    })
    cy.wait(1000);
    //Go to the staff owner page
    POM.elements.emailInput().should('not.exist'); 
    POM.goToStaff();
    cy.wait(1000);
    takeScreenshots ? POM.takeScreenShot('esc11', screenShotCount++): {};
    cy.get('.gh-badge.owner').click();
    cy.wait(1000);
    takeScreenshots ? POM.takeScreenShot('esc11', screenShotCount++): {};
    cy.get(`textarea[id="user-bio"]`).type(bio);
    cy.wait(1000);
    takeScreenshots ? POM.takeScreenShot('esc11', screenShotCount++): {};
    cy.get('span').contains('Save').click();
    cy.wait(1000);
    takeScreenshots ? POM.takeScreenShot('esc11', screenShotCount++): {};
    POM.elements.emailInput().should('not.exist'); 
    POM.goToStaff();
    cy.wait(1000);
    takeScreenshots ? POM.takeScreenShot('esc11', screenShotCount++): {};
    cy.get('.gh-badge.owner').click();
    cy.wait(1000);
    cy.get(`textarea[id="user-bio"]`).should('exist')
    takeScreenshots ? POM.takeScreenShot('esc11', screenShotCount++): {};
  })
})
