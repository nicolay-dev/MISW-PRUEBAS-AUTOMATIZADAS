import {faker} from '@faker-js/faker'

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = faker.lorem.word(10);
const parrafo = faker.lorem.paragraph(2)
const descriptionT = faker.random.alphaNumeric(500);


describe('Create a Twitter title card', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        
    })
       it('Login to ghost, add title, add content, add twitter card with description.', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
        })
        cy.wait(1000);
        
        //Create post
        POM.buildNewPost(titulo,parrafo)
        cy.wait(2000)
        
        POM.clickSettingsOnPP()
        cy.wait(2000)
        
        //Create Twitter CArd
        cy.get('b').contains("Twitter card").click();       
        cy.wait(1000);

        //Add card title
               
        cy.get('#twitter-title').type(titulo);
        cy.get('#twitter-description').type(descriptionT);
        cy.wait(1000);
        cy.get('.ember-view.gh-app ').click();        
        cy.wait(2000);
        
        //Publish post
        POM.publishUpdatePP()
        cy.wait(2000);
        
    })

})