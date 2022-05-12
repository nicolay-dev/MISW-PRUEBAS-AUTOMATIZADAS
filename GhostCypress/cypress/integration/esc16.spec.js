const { PassThrough } = require("stream")
const POM = require("../POM/POM")

Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('n.includes is not a function')) {
      return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  })

const url = Cypress.config('baseUrl') 
const username = Cypress.env('username')
const password = Cypress.env('password')
const parrafo = Cypress.env('PARRAFO')
const titulo = Cypress.env('POST16')

describe('Visit site login', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it('Login to ghost, change password and logout', () => {  
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000);
        POM.buildNewPost(titulo,parrafo)
        cy.get('.post-settings').click();
        cy.wait(1000);
        cy.get('b').contains("Twitter card").click();       
        cy.wait(1000);
        cy.get('.ember-view.post-setting-twitter-description').type("PRUEBA TITULO TARJETA TWITTER");
        cy.wait(1000);
        cy.get('.ember-view.gh-app ').click();
        cy.get('.ember-view.gh-publishmenu-trigger ').click();
        cy.get('.ember-view.gh-btn-blue').click();
        cy.wait(2000);

    })

})