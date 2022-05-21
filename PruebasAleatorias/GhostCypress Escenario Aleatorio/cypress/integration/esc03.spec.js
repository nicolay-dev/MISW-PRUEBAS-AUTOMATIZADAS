const { faker } = require('@faker-js/faker');

// Declaring constants
const POM = require("../POM/POM");
const pollData01 = Cypress.env('poolData01');
const takeScreenshots = false;

//Data Pool a-priori
const username = pollData01.username;
const password = pollData01.password;

let screenShotCount = 0;

function getDataPool() {
  return {
    titulo: pollData01.POST03,
    parrafo: pollData01.PARRAFO
  }
}

describe('Create and delete post', () => {
  beforeEach(() => {
    login();
  });


  it.only('Should create a post with title and content ok', () => {
    const fakeData = {
      titulo: faker.lorem.slug(100),
      parrafo: faker.lorem.paragraph()
    }
    buildPost(fakeData);
    publishPost();
    POM.viewReaderSite();
    cy.wait(3000);
    POM.elements.getPostPageinSite(data.titulo).click();
    cy.wait(2000);
    POM.elements.getPostPageinSite(data.titulo).should('exist');
  });


  it('Should not exist the post created after delete it', () => {
    const data = getDataPool();
    buildPost(data);
    publishPost();
    executeTest(data);
    POM.elements.getPostPageinSite(data.titulo).should('not.exist');
    cy.wait(3000);
  });

  it('Should not be able to publish a post when title is longer than 100 words', () => {
    const fakeData = {
      titulo: faker.lorem.slug(100),
      parrafo: faker.lorem.paragraph()
    }
    buildPost(fakeData);
    cy.get('span').contains('Publish').should('not.exist');
    cy.wait(3000);
  });
})

function login() {
  cy.visit("/");
  cy.wait(3000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  cy.get('form').within(() => { POM.signIn(username, password) });
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  cy.wait(1000);
}

//Build a new post
function buildPost(data) {
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.buildNewPost(data.titulo, data.parrafo);
  cy.wait(1000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
}

function publishPost() {
  POM.publishUpdatePP();
  cy.wait(5000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.returnToSectionView();
  cy.wait(2000);
}

function executeTest(data) {
  //Go to viewer site and confirm the post is published
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.viewReaderSite();
  cy.wait(2000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.elements.getPostPageinSite(data.titulo).click();
  cy.wait(3000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  //Delete post
  cy.visit(Cypress.config('baseUrl'))
  cy.wait(2000)
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.goToPosts();
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.elements.getPPT(data.titulo).click()
  cy.wait(1000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.clickSettingsOnPP();
  cy.wait(2000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  cy.wait(1000);
  POM.deleteButtonClick();
  cy.wait(2000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.elements.confirmDelete().click({force: true});
  //Check in viewer site post is no longer there
  cy.wait(3000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.viewReaderSite();
  cy.wait(2000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
}

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
})