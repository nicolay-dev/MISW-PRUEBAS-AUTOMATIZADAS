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
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST18;
const parrafo = pollData01.PARRAFO;

describe('Unpublish post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
  })
  it('Create post and unpublish it', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(2000)
    //Build a new post
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    POM.publishUpdatePP()
    cy.wait(4000)
    POM.returnToSectionView()
    cy.wait(2000)

    //Go to viewer site and confirm the post is published
    cy.wait(2000)
    POM.elements.viewSite().click()
    cy.wait(2000)
    POM.elements.getPostPageinSite(titulo).click()
    cy.wait(3000)
    //Return to posts section
    cy.visit(url)
    cy.wait(2000)
    POM.goToPosts()
    cy.wait(2000)
    //Select recently created post
    POM.elements.getPPT(titulo).click()
    cy.wait(2000)
   
   //Unpublish it
    POM.elements.menuPublishUpdatePP().click()
    cy.wait(2000)
    cy.get('div').contains('Unpublished').click()
    cy.wait(1000)
    POM.elements.btnPublishUpdatePP().click()
    cy.wait(3000)
    //Verify is in DRAFT status
    POM.returnToSectionView()
    cy.wait(4000)
    //Check viewer Site that it does not shows post
    POM.elements.viewSite().click()
    cy.wait(2000)
    POM.elements.getPostPageinSite(titulo).should('not.exist')
    cy.wait(3000)
  })

})