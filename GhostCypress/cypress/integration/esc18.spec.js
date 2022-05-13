const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST18')
const parrafo = Cypress.env('PARRAFO')
const urlLector = Cypress.env('URL-LECTOR')
let count=0;

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc18', count++);
  })
  it('Create post and unpublish it', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
      POM.takeScreenShot('esc18', count++);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    POM.takeScreenShot('esc18', count++);
    POM.publishUpdatePP()
    cy.wait(4000)
    POM.takeScreenShot('esc18', count++);
    POM.returnToSectionView()
    POM.takeScreenShot('esc18', count++);

    //Go to viewer site and confirm the post is published
    cy.wait(2000)
    cy.visit(urlLector)
    cy.wait(2000)
    POM.takeScreenShot('esc18', count++);
    POM.elements.getPostPageinSite(titulo).click()
    cy.wait(3000)
    POM.takeScreenShot('esc18', count++);
    //Return to posts section
    cy.visit(url)
    cy.wait(2000)
    POM.takeScreenShot('esc18', count++);
    POM.goToPosts()
    cy.wait(2000)
    POM.takeScreenShot('esc18', count++);
    //Select recently created post
    POM.elements.getPPT(titulo).click()
    cy.wait(2000)
    POM.takeScreenShot('esc18', count++);
   
   //Unpublish it
    POM.elements.menuPublishUpdatePP().click()
    cy.wait(2000)
    POM.takeScreenShot('esc18', count++);
    cy.get('div').contains('Unpublished').click()
    cy.wait(1000)
    POM.takeScreenShot('esc18', count++);
    POM.elements.btnPublishUpdatePP().click()
    cy.wait(3000)
    POM.takeScreenShot('esc18', count++);
    //Verify is in DRAFT status
    POM.returnToSectionView()
    cy.wait(4000)
    POM.takeScreenShot('esc18', count++);
    //Check viewer Site that it does not shows post
    cy.visit(urlLector)
    cy.wait(2000)
    POM.takeScreenShot('esc18', count++);
    POM.elements.getPostPageinSite(titulo).should('not.exist')
    cy.wait(3000)
    POM.takeScreenShot('esc18', count++);


  })

})