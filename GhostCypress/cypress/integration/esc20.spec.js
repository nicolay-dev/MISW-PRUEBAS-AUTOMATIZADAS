const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST20')
const parrafo = Cypress.env('PARRAFO')
let count = 0;

describe('Create post with facebook card', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc20', count++);
    })
       it('Login to ghost, add title, add content and create facebook card', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
          POM.takeScreenShot('esc20', count++);
        })
        cy.wait(1000);
        //Create new post
        POM.buildNewPost(titulo,parrafo)
        cy.wait(2000)
        POM.takeScreenShot('esc20', count++);
        POM.clickSettingsOnPP()
        cy.wait(2000)
        POM.takeScreenShot('esc20', count++);
        //Add facebook card
        cy.get('b').contains("Facebook card").click();       
        cy.wait(1000);
        POM.takeScreenShot('esc20', count++);
        //Sert Card title
        cy.get('.ember-view.post-setting-og-description').type("PRUEBA TITULO TARJETA FACEBOOK");
        cy.wait(1000);
        POM.takeScreenShot('esc20', count++);
        cy.get('.ember-view.gh-app ').click();
        cy.wait(2000);
        POM.takeScreenShot('esc20', count++);
        //Publish post
        POM.publishUpdatePP()
        cy.wait(2000);
        POM.takeScreenShot('esc20', count++);
    })

})