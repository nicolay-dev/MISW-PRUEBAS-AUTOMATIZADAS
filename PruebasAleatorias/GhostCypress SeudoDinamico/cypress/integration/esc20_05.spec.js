import {faker} from '@faker-js/faker'
const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = faker.lorem.word(10);
const parrafo = faker.lorem.paragraph(2)
const tituloF = faker.random.alphaNumeric(301);
const tituloG = faker.random.words(2);


describe('Create post with Facebook card', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)

    })
       it('Login to ghost, add title, add content and create facebook card', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
  
        })
        cy.wait(1000);
        //Create new post
        POM.buildNewPost(titulo,parrafo)
        cy.wait(2000)

        POM.clickSettingsOnPP()
        cy.wait(2000)

        //Add facebook card
        cy.get('b').contains("Facebook card").click();       
        cy.wait(1000);

        //Sert Card title
        cy.get('#og-title').type(tituloF);
        cy.wait(1000);
        cy.get('.active > .settings-menu-header').click()
        cy.wait(1000);
        cy.get('div[class="form-group error ember-view"] p[class="response"]').contains('Facebook Title cannot be longer than 300 characters. ')
        cy.wait(1000);
        cy.get('#og-title').clear().type(tituloG); 
        

        cy.get('.ember-view.gh-app ').click();
        cy.wait(2000);

        //Publish post
        POM.publishUpdatePP()
        cy.wait(2000);

    })

})