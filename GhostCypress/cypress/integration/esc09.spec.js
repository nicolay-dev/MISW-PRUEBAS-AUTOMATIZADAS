const POM = require("../POM/POM")
const url = Cypress.config('baseUrl') 
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Visit site login and create tag', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it('Login to ghost, create page, publish page, edit title of page, validate  page edited', () => {  
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
        // Create a new page
        POM.createNewPage(Cypress.env('PAGE09'), Cypress.env('PARRAFO') )
        cy.wait(1000)
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        POM.elements.managePages().click()
        cy.wait(1000)
        // Edit the title of the page
        POM.elements.getPPT(Cypress.env('PAGE09')).click()
        cy.get('.gh-editor-title').type(Cypress.env('PAGE09Edit'))
        cy.wait(2000);
       POM.updateChangesOnPP()
         cy.wait(1000)
         cy.wait(1000)
         POM.elements.managePages().click()
         cy.wait(1000)
            // Validate the title of the page

            cy.get("h3").then(($title) => {
                expect($title[0].innerText).to.equal(`${Cypress.env('PAGE09')}`+`${Cypress.env('PAGE09Edit')}`)
              }) // Check if the title is the same as the one we edited
          
                 

        })
       
    })

 