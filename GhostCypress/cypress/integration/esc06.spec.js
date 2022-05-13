const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST06')
const parrafo = Cypress.env('PARRAFO')
const urlLector = Cypress.env('URL-LECTOR')
const tituloTag = Cypress.env('TAG06')
let count = 0;

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc06', count++);
  })
  it('Login to ghost, change password and logout', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
      POM.takeScreenShot('esc06', count++);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    POM.takeScreenShot('esc06', count++);
    POM.publishUpdatePP()
    cy.wait(4000)
    POM.takeScreenShot('esc06', count++);
    POM.returnToSectionView()


    //Create a Tag
    cy.wait(2000)
    POM.takeScreenShot('esc06', count++);
    POM.elements.manageTags().click()
    cy.wait(2000)
    POM.takeScreenShot('esc06', count++);
    POM.createNewTag(tituloTag)
    cy.wait(2000)
    POM.takeScreenShot('esc06', count++);
    //Add Tag to Post
    POM.elements.managePosts().click()
    POM.elements.getPPT(titulo).click()
    cy.wait(2000)
    POM.takeScreenShot('esc06', count++);
    POM.clickSettingsOnPP()
    cy.get('#tag-input').type(tituloTag)
    cy.get('li').contains(tituloTag).click()
    cy.wait(2000)
    POM.takeScreenShot('esc06', count++);
    POM.closeSettings()
    cy.wait(1000)
    POM.takeScreenShot('esc06', count++);
    POM.publishUpdatePP()

    //Go to viewer site and confirm the post is published
    cy.wait(2000)
    POM.takeScreenShot('esc06', count++);
    cy.visit(urlLector)
    cy.wait(2000)
    POM.takeScreenShot('esc06', count++);
    POM.elements.getTaginSite(tituloTag).click()
    cy.wait(2000)
    POM.takeScreenShot('esc06', count++);
    POM.elements.getPostPageinTag(titulo).click()
    cy.wait(3000)
    POM.takeScreenShot('esc06', count++);


  })

})