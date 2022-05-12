const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST06')
const parrafo = Cypress.env('PARRAFO')
const urlLector = Cypress.env('URL-LECTOR')
const tituloTag = Cypress.env('TAG06')

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
  })
  it('Login to ghost, change password and logout', () => {
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
    

    //Create a Tag
    cy.wait(2000)
    POM.elements.manageTags().click()
    cy.wait(2000)
    POM.createNewTag(tituloTag)
    cy.wait(2000)

    //Add Tag to Post
    POM.elements.managePosts().click()
    POM.elements.getPPT(titulo).click()
    cy.wait(2000)
    POM.clickSettingsOnPP()
    cy.get('#tag-input').type(tituloTag)
    cy.get('li').contains(tituloTag).click()
    cy.wait(2000)
    POM.closeSettings()
    cy.wait(1000)
    POM.publishUpdatePP()

    //Go to viewer site and confirm the post is published
    cy.wait(2000)
    cy.visit(urlLector)
    cy.wait(2000)
    POM.elements.getTaginSite(tituloTag).click()
    cy.wait(2000)
    POM.elements.getPostPageinTag(titulo).click()
    cy.wait(3000)


  })

})