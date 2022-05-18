const { faker } = require('@faker-js/faker');

// Declaring constants
const POM = require("../POM/POM");
const pollData01 = Cypress.env('poolData01');
const takeScreenshots = false;

//Data Used
const username = pollData01.username;
const password = pollData01.password;
const titulo = faker.name.firstName();
const parrafo = faker.lorem.paragraph();

let count = 0;

describe('Create and delete post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    takeScreenshots ? POM.takeScreenShot('esc03', count++): {};
    executeTest(takeScreenshots);
  })
  it('Should not exist the post created', () => {
    POM.elements.getPostPageinSite(titulo).should('not.exist');
    cy.wait(3000);
  })
})


function executeTest(isScreenshots) {
  cy.get('form').within(() => {
    POM.signIn(username, password);
  })
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  cy.wait(1000);
  //Build a new post
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.buildNewPost(titulo, parrafo);
  cy.wait(1000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.publishUpdatePP();
  cy.wait(5000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.returnToSectionView();
  //Go to viewer site and confirm the post is published
  cy.wait(2000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.viewReaderSite();
  cy.wait(2000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.elements.getPostPageinSite(titulo).click();
  cy.wait(3000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  //Delete post
  cy.visit(Cypress.config('baseUrl'))
  cy.wait(2000)
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.goToPosts();
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.elements.getPPT(titulo).click()
  cy.wait(1000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.clickSettingsOnPP();
  cy.wait(2000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  cy.wait(1000);
  POM.deleteButtonClick();
  cy.wait(2000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.elements.confirmDelete().click({force: true});
  //Check in viewer site post is no longer there
  cy.wait(3000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
  POM.viewReaderSite();
  cy.wait(2000);
  isScreenshots ? POM.takeScreenShot('esc03', count++): {};
}

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
})