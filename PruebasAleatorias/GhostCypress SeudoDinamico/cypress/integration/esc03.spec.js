const { faker } = require('@faker-js/faker');

// Declaring constants
const POM = require("../POM/POM");
const poolData01 = Cypress.env('poolData01');
const poolData02 = Cypress.env('poolData02');
const poolData03 = Cypress.env('poolData03');
const takeScreenshots = false;

let screenShotCount = 0;

function getPoolData(pollDataNumber) {
  switch (pollDataNumber) {
    case 2:
      return {
        titulo: poolData02.POST03,
        parrafo: poolData02.PARRAFO
      }
    case 3:
      return {
        titulo: poolData03.title,
        parrafo: poolData03.PARRAFO
      }
    default:
      return {
        titulo: poolData01.POST03,
        parrafo: poolData01.PARRAFO
      }
  }
}

describe('Create and delete post', () => {
  beforeEach(() => {
    login();
  });

  it('Should not exist the post created after delete it', () => {
    const data = getPoolData();
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

  //Issue
  it('Should not be able to publish a post whit special chars in title', () => {
    const data = getPoolData(3);
    buildPost(data);
    cy.get('span').contains('Publish').should('be.disabled');
    cy.wait(3000);
  });

  //Error
  it('Should be able to publish a post whit text and an image', () => {
    const fakeData = {
      titulo: faker.name.findName(),
      parrafo: faker.lorem.paragraph(),
      imagen: faker.image.abstract()
    };
    buildPost(fakeData);
    POM.addImageToPost(fakeData.imagen);
    cy.wait(5000);
    publishPost();
    POM.viewReaderSite();
    cy.get('h2').contains(fakeData.titulo).click();
    cy.get(`img[src="${fakeData.imagen}"]`).should('exist');
    cy.wait(3000);
  });
})

function login() {
  cy.visit("/");
  cy.wait(3000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  cy.get('form').within(() => { POM.signIn(Cypress.env('poolData01').username, Cypress.env('poolData01').password) });
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

//Publish a new post
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