import {faker} from '@faker-js/faker'

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = faker.lorem.word(12);
const parrafo = faker.lorem.paragraph(2);
const excerpt = faker.random.alphaNumeric(301);
const excerpt2 = faker.random.word(15);


describe('Create excerpt description in post', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        
    })
       it('Login to ghost, create post, add title, add content and set excerpt', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
          
        })
        cy.wait(1000)
        //Build a new post
        POM.buildNewPost(titulo, parrafo)
        cy.wait(2000)
        
        POM.clickSettingsOnPP()
        cy.wait(2000);
        
        //Create Excertp
        cy.get('.ember-text-area.post-setting-custom-excerpt').type(excerpt);
        
        //Click on empty space
        cy.get('.settings-menu-header').click();
        cy.wait(2000);
        cy.get('button[title="Settings"]');
        cy.wait(2000);
        cy.get('div[class="form-group error ember-view"] p[class="response"]').contains('Excerpt cannot be longer than 300 characters.')
        cy.wait(2000);
        cy.get('#custom-excerpt').clear().type(excerpt2);
        cy.wait(2000);

        

        POM.closeSettings()
        cy.wait(2000);
        
        //Pusblish Post
        POM.publishUpdatePP()
        cy.wait(2000);
        
      
    })

})