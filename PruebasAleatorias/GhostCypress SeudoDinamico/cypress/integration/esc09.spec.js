const POM = require("../POM/POM")
const url = Cypress.config('baseUrl') 
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
let count = 0;

describe('Create and edit page', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc09', count++);
    })
       it('Login to ghost, create page, publish page, edit title of page, validate  page edited', () => {  
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        POM.takeScreenShot('esc09', count++);
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
        POM.takeScreenShot('esc09', count++);
        // Create a new page
        POM.createNewPage(Cypress.env('poolData01').PAGE09, Cypress.env('poolData01').PARRAFO)
        cy.wait(1000)
        POM.takeScreenShot('esc09', count++);
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        POM.takeScreenShot('esc09', count++);
        POM.elements.managePages().click()
        cy.wait(1000)
        POM.takeScreenShot('esc09', count++);
        // Edit the title of the page
        POM.elements.getPPT(Cypress.env('poolData01').PAGE09).click()
        cy.get('.gh-editor-title').type(Cypress.env('poolData01').PAGE09Edit)
        cy.wait(2000);
        POM.takeScreenShot('esc09', count++);
        POM.publishUpdatePP()
         cy.wait(1000)
         cy.wait(1000)
         POM.takeScreenShot('esc09', count++);
         POM.elements.managePages().click()
         cy.wait(1000)
         POM.takeScreenShot('esc09', count++);
            // Validate the title of the page

            cy.get("h3").then(($title) => {
                expect($title[0].innerText).to.equal(`${Cypress.env('poolData01').PAGE09}`+`${Cypress.env('poolData01').PAGE09Edit}`)
              }) // Check if the title is the same as the one we edited
              POM.takeScreenShot('esc09', count++);
        })
       
    })

 