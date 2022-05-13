const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST16')
const parrafo = Cypress.env('PARRAFO')


describe('Create a title card', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it('Login to ghost, add title, add content, add twitter card with description.', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
        })
        cy.wait(1000);
        //Create post
        POM.buildNewPost(titulo,parrafo)
        cy.wait(2000)
        POM.clickSettingsOnPP()
        cy.wait(2000)
        //Create Twitter CArd
        cy.get('b').contains("Twitter card").click();       
        cy.wait(1000);
        //Add card title
        cy.get('.ember-view.post-setting-twitter-description').type("PRUEBA TITULO TARJETA TWITTER");
        cy.wait(1000);
        cy.get('.ember-view.gh-app ').click();        
        cy.wait(2000);
        //Publish post
        POM.publishUpdatePP()
        cy.wait(2000);
    })

})