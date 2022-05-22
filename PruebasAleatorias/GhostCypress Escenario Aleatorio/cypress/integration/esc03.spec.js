const { faker } = require('@faker-js/faker');

// Declaring constants
const POM = require("../POM/POM");
const pollData01 = Cypress.env('poolData01');
const takeScreenshots = false;

//Username
const username = pollData01.genericUsername;
const password = pollData01.genericPassword;

let screenShotCount = 0;

describe('Create and delete post', () => {
  beforeEach(() => {
    login();
  });

  it('Should publish a post with title and content ok', () => {
    const fakeData = {
      titulo: faker.lorem.sentence(),
      parrafo: faker.lorem.paragraph()
    }
    buildPost(fakeData);
    publishPost();
    gotoPostInRenderSite(fakeData);
    cy.get('h1').contains(fakeData.titulo).should('exist');
  });

  it('Should not be able to publish post with title with more than 2001 chars', () => {
    const fakeData = {
      titulo: faker.random.alphaNumeric(2001),
      parrafo: faker.lorem.paragraph()
    }
    buildPost(fakeData);
    cy.get('div[class="gh-publishmenu ember-view"]').should('not.exist');
  });

  //Isue the test fail
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
  cy.get('form').within(() => { POM.signIn(username, password) });
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  cy.wait(1000);
}

function gotoPostInRenderSite(data) {
  POM.viewReaderSite();
  cy.wait(3000);
  POM.elements.getPostPageinSite(data.titulo).click();
  cy.wait(2000);
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

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
})