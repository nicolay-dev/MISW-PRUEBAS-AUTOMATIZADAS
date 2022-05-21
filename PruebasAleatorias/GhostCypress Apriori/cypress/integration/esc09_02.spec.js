const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const { faker } = require('@faker-js/faker');
const seed = Math.floor(Math.random()*200);
faker.seed(seed);

// Este es mi pool de datos seudo dinámicos para la prueba   
const pages = Cypress._.range(1, 20).map((index)=>{
    return {
        seed: seed,
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraphs(3),
        titleEdit: faker.lorem.sentence(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        passwordConfirm: faker.internet.password(),
        username: faker.internet.userName(),
        random: faker.datatype.string(),
        id: index,
    }
})


describe('Create and edit page', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it.each(Cypress._.sampleSize(pages,4))(
           (page,k) =>   `Login to ghost, create page, publish page, edit title of page, validate  page edited ${k+1}.`, 
           (page) => {  
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
   
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
   
        // Create a new page
        POM.createNewPage(page.title, page.content)
        cy.wait(1000)
   
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
   
        POM.elements.managePages().click()
        cy.wait(1000)
   
        // Edit the title of the page
        POM.elements.getPPT(page.title).click()
        cy.get('.gh-editor-title').type(page.titleEdit)
        cy.wait(2000);
   
        POM.publishUpdatePP()
         cy.wait(1000)
         cy.wait(1000)
    
         POM.elements.managePages().click()
         cy.wait(1000)
    
            // Validate the title of the page

            cy.get("h3").then(($title) => {
                expect($title[0].innerText).to.equal(`${page.title}`+`${page.titleEdit}`)
              }) // Check if the title is the same as the one we edited
         
        })
    })