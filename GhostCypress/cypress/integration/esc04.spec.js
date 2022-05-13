const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST04')
const parrafo = Cypress.env('PARRAFO')
let count = 0;

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc04', count++);
  })
  it('Login to ghost, create title, create content, publish and edit title.', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    POM.takeScreenShot('esc04', count++);
        cy.wait(1000)
        //Build a new post
        POM.buildNewPost(titulo, parrafo)
        cy.wait(1000)
        POM.takeScreenShot('esc04', count++);
        POM.publishUpdatePP()
        cy.wait(4000)
        POM.takeScreenShot('esc04', count++);
        //Back to return view
        POM.returnToSectionView()
        cy.wait(2000);
        POM.takeScreenShot('esc04', count++);
        //Verify title
        cy.get('span').contains('Published');
        cy.wait(2000)
        POM.takeScreenShot('esc04', count++);
        //Select specific title
        cy.get('h3').contains("Post Escenario 4").click();
        cy.wait(2000)
        POM.takeScreenShot('esc04', count++);
        //Change title
        POM.editTitlePost('Nuevo título editado 4');
        cy.wait(2000);
        POM.takeScreenShot('esc04', count++);
        //Publish post
        POM.publishUpdatePP()
        POM.takeScreenShot('esc04', count++);
    })

})