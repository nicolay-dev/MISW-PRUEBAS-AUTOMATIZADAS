const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST18')
const parrafo = Cypress.env('PARRAFO')
const urlLector = Cypress.env('URL-LECTOR')

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
  })
  it('Create post and unpublish it', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    POM.publishUpdatePP()
    cy.wait(4000)
    POM.returnToSectionView()


    //Go to viewer site and confirm the post is published
    cy.wait(2000)
    cy.visit(urlLector)
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
    cy.visit(urlLector)
    cy.wait(2000)
    POM.elements.getPostPageinSite(titulo).should('not.exist')
    cy.wait(3000)


  })

})