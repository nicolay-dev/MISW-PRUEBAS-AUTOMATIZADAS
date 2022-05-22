// Declaring constants
const POM = require("../POM/POM");
const pollData01 = Cypress.env('poolData01');
const takeScreenshots = false;

//Username Data
const username = pollData01.username;
const password = pollData01.password;

let screenShotCount = 0;
let data = {};

describe('Create and delete post', () => {
  beforeEach(() => {
    // Get apriori data
    cy.fixture('apriori').then((apriori) => {
      data = apriori;
    });
    login();
  });

  it('Should not exist the post created after delete it', () => {
    buildPost(data.apriori[1]);
    publishPost();
    executeTest(data.apriori[1]);
    cy.get('h2').contains(data.apriori[1].title).should('not.exist');
    cy.wait(3000);
  });

  //Isue the test fail
  it('Should not be able to publish a post whit special chars in title', () => {
    const specialData = {
      title: data.apriori[1].string191,
      content: data.apriori[1].content
    }
    buildPost(specialData);
    cy.get('span').contains('Publish').should('not.exist');
    cy.wait(3000);
  });

  //Isue the test fail
  it('Should not be able to publish a post whit special chars in content', () => {
    const specialData = {
      content: data.apriori[1].string191,
      title: data.apriori[1].title
    }
    buildPost(specialData);
    cy.get('span').contains('Publish').should('not.exist');
    cy.wait(3000);
  });

  //Isue the test fail
  it('Should not be able to publish a post without title', () => {
    POM.elements.createPost().click();
    cy.get('textarea[placeholder="Post Title"]').type('{enter}');
    cy.get('div[data-placeholder="Begin writing your post..."]').type(data.apriori[1].content);
    cy.get('span').contains('Publish').should('not.exist');
    cy.wait(3000);
  });

  it('Should not be able to publish a post without content', () => {
    POM.elements.createPost().click();
    cy.get('textarea[placeholder="Post Title"]').type(data.apriori[1].title);
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
  POM.buildNewPost(data.title, data.content);
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
  POM.elements.getPostPageinSite(data.title).click();
  cy.wait(3000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  //Delete post
  cy.visit(Cypress.config('baseUrl'))
  cy.wait(2000)
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.goToPosts();
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  POM.elements.getPPT(data.title).click()
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