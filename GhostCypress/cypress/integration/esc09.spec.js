const POM = require("../POM/POM")
const url = Cypress.config('baseUrl') 
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Visit site login and create tag', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it('Login to ghost, create page, publish page, edit title of page, validate visit to page', () => {  
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
              POM.elements.publishPP.click()
                cy.wait(1000)
                
                 

        })
       
    })

 