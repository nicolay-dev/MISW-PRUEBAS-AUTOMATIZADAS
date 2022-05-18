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
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST02')
const parrafo = Cypress.env('PARRAFO')
let count=0;

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc02', count++);
  })
  it('Login to ghost, change password and logout', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    POM.takeScreenShot('esc02', count++);
    cy.wait(1000)
    //Build a new post
    POM.takeScreenShot('esc02', count++);
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    POM.takeScreenShot('esc02', count++);
    POM.publishUpdatePP()
    cy.wait(4000)
    POM.takeScreenShot('esc02', count++);
    POM.returnToSectionView()
    //Go to viewer site and confirm the post is published
    cy.wait(2000)
    POM.takeScreenShot('esc02', count++);
    POM.viewReaderSite();
    cy.wait(2000)
    POM.takeScreenShot('esc02', count++);
    POM.elements.getPostPageinSite(titulo).click()
    cy.wait(3000)
    POM.takeScreenShot('esc02', count++);

  })

})