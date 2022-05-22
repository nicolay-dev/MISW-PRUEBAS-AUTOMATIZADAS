const POM = require("../POM/POM")
const url = Cypress.config('baseUrl') 
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;


describe('Create and edit page', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        cy.fixture('apriori').then(function (data) {
            this.data = data
        })  
    })
       it('09_2-Login to ghost, create page, publish page, edit title of page, validate  page edited oráculo negativo página sin título', function() {  
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
            
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
            
        // Create a new page
        POM.elements.createPage().click();
        cy.wait(2000);
        //Texto de titulo vacío 
        //cy.get('textarea[placeholder="Page Title"]').type(titulo)
        cy.wait(2000);
        cy.get("div[data-placeholder=\"Begin writing your page...\"]").type(this.data.apriori[3].content)    
        cy.wait(1000)
            
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        POM.elements.managePages().click()
        cy.wait(1000)
            
        // Edit the title of the page
        POM.elements.getPPT("(Untitled)").click({force: true})
        cy.get('.gh-editor-title').type(this.data.apriori[3].title)
        cy.wait(2000);
            
        POM.publishUpdatePP()
         cy.wait(1000)
         cy.wait(1000)
             
         POM.elements.managePages().click()
         cy.wait(1000)
             
            // Validate the title of the page

            cy.get("h3").then(($title) => {
                expect($title).contain(`(Untitled)`+`${this.data.apriori[3].title}`)
              }) // Check if the title is the same as the one we edited
                  
        })
       
    })

 