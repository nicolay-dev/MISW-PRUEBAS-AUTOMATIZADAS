const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST16')
const parrafo = Cypress.env('PARRAFO')
let count = 0; 

describe('Create a Twitter title card', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc16', count++);
    })
       it('Login to ghost, add title, add content, add twitter card with description.', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
        })
        cy.wait(1000);
        POM.takeScreenShot('esc16', count++);
        //Create post
        POM.buildNewPost(titulo,parrafo)
        cy.wait(2000)
        POM.takeScreenShot('esc16', count++);
        POM.clickSettingsOnPP()
        cy.wait(2000)
        POM.takeScreenShot('esc16', count++);
        //Create Twitter CArd
        cy.get('b').contains("Twitter card").click();       
        cy.wait(1000);
        POM.takeScreenShot('esc16', count++);
        //Add card title
        cy.get('.ember-view.post-setting-twitter-description').type("PRUEBA TITULO TARJETA TWITTER");
        cy.wait(1000);
        POM.takeScreenShot('esc16', count++);
        cy.get('.ember-view.gh-app ').click();        
        cy.wait(2000);
        POM.takeScreenShot('esc16', count++);
        //Publish post
        POM.publishUpdatePP()
        cy.wait(2000);
        POM.takeScreenShot('esc16', count++);
    })

})