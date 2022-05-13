const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST04')
const parrafo = Cypress.env('PARRAFO')

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
  })
  it('Login to ghost, create title, create content, publish and edit title.', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
        cy.wait(1000)
        //Build a new post
        POM.buildNewPost(titulo, parrafo)
        cy.wait(1000)
        POM.publishUpdatePP()
        cy.wait(4000)
        //Back to return view
        POM.returnToSectionView()
        cy.wait(2000);
        //Verify title
        cy.get('span').contains('Published');
        cy.wait(2000)
        //Select specific title
        cy.get('h3').contains("Post Escenario 04").click();
        cy.wait(2000)
        //Change title
        POM.editTitlePost('Nuevo título editado 4');
        cy.wait(2000);
        //Publish post
        POM.publishUpdatePP()

    })

})