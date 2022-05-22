const { faker } = require('@faker-js/faker');
const seed = Math.floor(Math.random()*200);
faker.seed(seed);
const POM = require("../POM/POM")
const url = Cypress.config('baseUrl') 
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;

const titulo255 = faker.random.alphaNumeric(255);
const titulo256 = faker.random.alphaNumeric(256);
const titulo254= faker.random.alphaNumeric(254);
const parrafo = faker.lorem.paragraphs(3);
const titulo = faker.lorem.words(3);
const tituloEdit = faker.lorem.words(5);
const tituloSpecial100 = faker.datatype.string(100);


describe('Create and edit page', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it('09_3-Login to ghost, create page, publish page, edit title of page, validate  page edited oraculo negativo página título  caracteres iguales a 256', function() {  
        cy.log(seed)
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
         
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
         
        // Create a new page
        POM.createNewPage(titulo256, parrafo)
        cy.wait(1000)

        // cy.get('div:contains("Saving failed: Title cannot be longer than 255 characters.")').should('be.visible')
        cy.wait(1000)
        //  Hacer el page con datos correctos:
        cy.get('textarea[placeholder="Page Title"]').clear({force: true}).type(titulo, {force: true})
        cy.wait(2000);
        cy.get("div[data-placeholder=\"Begin writing your page...\"]").clear({force: true}).type(parrafo, {force: true})  
        cy.wait(1000)
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
         
        POM.elements.managePages().click()
        cy.wait(1000)
         
        // Edit the title of the page
        POM.elements.getPPT(titulo).click( {force: true})
        cy.get('.gh-editor-title').type(tituloEdit)
        cy.wait(2000);
         
        POM.publishUpdatePP()
         cy.wait(1000)
         cy.wait(1000)
          
         POM.elements.managePages().click()
         cy.wait(1000)
          
            // Validate the title of the page

            cy.get("h3").then(($title) => {
                expect($title).to.contain(`${titulo}`+`${tituloEdit}`)
              }) // Check if the title is the same as the one we edited
               
        })
        it('09_4-Login to ghost, create page, publish page, edit title of page, validate  page edited oráculo positivo caracteres iguales a 255 ', function() {  
            cy.log(seed)
            cy.get('form').within(() => {
                POM.signIn(username, password);
            })
            cy.wait(1000)
             
            //Create a page
            // Go to Pages
            POM.goToPages()
            cy.wait(1000)
             
            // Create a new page
            POM.createNewPage(titulo255, parrafo)
            cy.wait(1000)
            POM.elements.menuPublishUpdatePP().should('be.visible')
            cy.wait(1000)
           
            // Publish the page
            POM.publishUpdatePP()
            cy.wait(1000)
             
            POM.elements.managePages().click()
            cy.wait(1000)
             
            // Edit the title of the page
            cy.get("h3").contains(titulo255).click({force: true})
            cy.wait(1000)
            cy.get('.gh-editor-title').clear({force: true}).type(tituloEdit, {force: true})
            cy.wait(2000);
             
            POM.publishUpdatePP()
             cy.wait(1000)
             cy.wait(1000)
              
             POM.elements.managePages().click()
             cy.wait(1000)
              
                // Validate the title of the page
    
                cy.get("h3").then(($title) => {
                    expect($title).to.contain(`${tituloEdit}`)
                  }) // Check if the title is the same as the one we edited
                   
            })

    it('09_5-Login to ghost, create page, publish page, edit title of page, validate  page edited oráculo positivo caracteres iguales a 254 ', function() {  
        cy.log(seed)
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
            
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
            
        // Create a new page
        POM.createNewPage(titulo254, parrafo)
        cy.wait(1000)
        POM.elements.menuPublishUpdatePP().should('be.visible')
        cy.wait(1000)
        
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
            
        POM.elements.managePages().click()
        cy.wait(1000)
            
        // Edit the title of the page
        cy.get("h3").contains(titulo254).click({force: true})
            cy.get('.gh-editor-title').clear({force: true}).type(tituloEdit, {force: true})
            cy.wait(2000);
            
        POM.publishUpdatePP()
            cy.wait(1000)
            cy.wait(1000)
            
            POM.elements.managePages().click()
            cy.wait(1000)
            
            // Validate the title of the page

            cy.get("h3").then(($title) => {
                expect($title).to.contain(`${tituloEdit}`)
                }) // Check if the title is the same as the one we edited
                
        })

        it('09_6-Login to ghost, create page, publish page, edit title of page, validate  page edited oráculo positivo caracteres iguales a 100 especiales ', function() {  
            cy.log(seed)
            cy.get('form').within(() => {
                POM.signIn(username, password);
            })
            cy.wait(1000)
                
            //Create a page
            // Go to Pages
            POM.goToPages()
            cy.wait(1000)
                
            // Create a new page
            POM.createNewPage(tituloSpecial100, parrafo)
            cy.wait(1000)
            POM.elements.menuPublishUpdatePP().should('be.visible')
            cy.wait(1000)
            
            // Publish the page
            POM.publishUpdatePP()
            cy.wait(1000)
                
            POM.elements.managePages().click()
            cy.wait(1000)
                
            // Edit the title of the page
            cy.get("h3").contains(tituloSpecial100).click({force: true})
                cy.get('.gh-editor-title').clear({force: true}).type(tituloEdit, {force: true})
                cy.wait(2000);
                
            POM.publishUpdatePP()
                cy.wait(1000)
                cy.wait(1000)
                
                POM.elements.managePages().click()
                cy.wait(1000)
                
                // Validate the title of the page
    
                cy.get("h3").then(($title) => {
                    expect($title).to.contain(`${tituloEdit}`)
                    }) // Check if the title is the same as the one we edited
                    
            })
    })

 