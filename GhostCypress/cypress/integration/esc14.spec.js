const POM = require("../POM/POM")
const url = Cypress.config('baseUrl') 
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('PAGE14')
const texto = Cypress.env('PARRAFO') 

describe('Create Page', () => {
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
        POM.createNewPage(titulo,texto)
        cy.wait(1000)
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        //Visit page
        POM.clickSettingsOnPP()
        cy.get('a[class="post-view-link"]').click()
        cy.wait(4000)         

        })
       
    })

 