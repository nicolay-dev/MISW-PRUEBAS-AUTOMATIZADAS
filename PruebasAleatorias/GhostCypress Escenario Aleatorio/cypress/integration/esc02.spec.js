const { faker } = require('@faker-js/faker');

Cypress.on('uncaught:exception', (err) => {
  // we expect a 3rd party library error with message 'Cannot read properties of null (reading 'querySelector')'
  // and don't want to fail the test so we return false
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})

const POM = require("../POM/POM");
const pollData01 = Cypress.env('poolData01');
const username = pollData01.genericUsername;
const password = pollData01.genericPassword;
const titulo = faker.random.alphaNumeric(10);
const titulo2 = faker.random.alphaNumeric(256);
const parrafo = faker.lorem.sentences(3);

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(2000)
  })
  it('Creates a post with long title', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    POM.editTitlePost(titulo2)
    POM.publishUpdatePP()
    cy.wait(2000)
    //Confirm post could not be published
    cy.get(".gh-alert-content").should('exist')

  })

})