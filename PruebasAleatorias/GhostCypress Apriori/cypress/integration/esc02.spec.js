Cypress.on('uncaught:exception', (err) => {
  // we expect a 3rd party library error with message 'Cannot read properties of null (reading 'querySelector')'
  // and don't want to fail the test so we return false
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})

const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');
const username = pollData01.genericUsername;
const password = pollData01.genericPassword;
const titulo = pollData01.POST02;
const titulo2 = pollData01.POST02_1;
const parrafo = pollData01.PARRAFO;

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(2000)
  })
  it('Standard post', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    POM.publishUpdatePP()
    cy.wait(3000)
    POM.returnToSectionView()
    //Go to viewer site and confirm the post is published
    cy.wait(1000)
    POM.viewReaderSite();
    cy.wait(1000)
    POM.elements.getPostPageinSite(titulo).click()
    cy.wait(2000)
  })

  it('Post with blank title', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo, parrafo)
    cy.wait(500)
    cy.get('textarea[placeholder="Post Title"]').clear();
    cy.wait(1000)
    POM.publishUpdatePP()
    cy.wait(3000)
    POM.returnToSectionView()
    //Go to viewer site and confirm the post is published
    cy.wait(1000)
    POM.viewReaderSite();
    cy.wait(1000)
    POM.elements.getPostPageinSite('(Untitled)').click()
    cy.wait(2000)
  })

  it('Post with blank paragraph', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo2, parrafo)
    cy.wait(500)
    cy.get('div[data-placeholder="Begin writing your post..."]').clear();
    cy.wait(1000)
    POM.publishUpdatePP()
    cy.wait(3000)
    POM.returnToSectionView()
    //Go to viewer site and confirm the post is published
    cy.wait(1000)
    POM.viewReaderSite();
    cy.wait(1000)
    POM.elements.getPostPageinSite(titulo2).click()
    cy.wait(2000)
  })

})