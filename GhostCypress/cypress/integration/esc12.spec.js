
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

describe('Visit site login', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it('Login to ghost, change password and logout', () => {  
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type(username)
            cy.get('input[id="ember10"]').type(password)
            cy.get('.login.gh-btn').click()
        })
        cy.get('.ember-view.gh-secondary-action.gh-nav-new-post').click();
        cy.wait(1000);
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('POST DE PRUEBA PARA BORRAR');
        cy.wait(2000);
        cy.get('.koenig-editor__editor').type("PRUEBAS AUTOMATIZADAS MISO");
        cy.wait(3000);
        cy.get('.post-settings').click();
        cy.wait(1000);
        cy.get('.ember-text-area.post-setting-custom-excerpt').type("PRUEBA EXCERPT");
        cy.wait(1000);
        cy.get('.ember-view.gh-app ').click();
        cy.get('.ember-view.gh-publishmenu-trigger ').click();
        cy.get('.ember-view.gh-btn-blue').click();
        cy.wait(2000);

    })

})