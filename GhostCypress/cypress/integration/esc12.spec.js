const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST12')
const parrafo = Cypress.env('PARRAFO')
let count= 0;

describe('Create excerpt description in post', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc12', count++);
    })
       it('Login to ghost, create post, add title, add content and set excerpt', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
          POM.takeScreenShot('esc12', count++);
        })
        cy.wait(1000)
        //Build a new post
        POM.buildNewPost(titulo, parrafo)
        cy.wait(2000)
        POM.takeScreenShot('esc12', count++);
        POM.clickSettingsOnPP()
        cy.wait(2000);
        POM.takeScreenShot('esc12', count++);
        //Create Excertp
        cy.get('.ember-text-area.post-setting-custom-excerpt').type("PRUEBA EXCERPT");
        cy.wait(2000);
        POM.takeScreenShot('esc12', count++);
        POM.closeSettings()
        cy.wait(2000);
        POM.takeScreenShot('esc12', count++);
        //Pusblish Post
        POM.publishUpdatePP()
        cy.wait(2000);
        POM.takeScreenShot('esc12', count++);

    })

})