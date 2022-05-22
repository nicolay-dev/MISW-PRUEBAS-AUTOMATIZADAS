import {faker} from '@faker-js/faker'
const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = faker.lorem.word(10);
const parrafo = faker.lorem.paragraph(2)
const descriptionT = faker.random.alphaNumeric(501);
const descriptionC = faker.random.alphaNumeric(300);


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

        //Set Card title
        cy.get('#og-title').type(titulo);
        cy.get('#og-description').type(descriptionT);
        cy.wait(1000);
        cy.get('.active > .settings-menu-header').click()
        cy.wait(1000);
        cy.get('div[class="form-group error ember-view"] p[class="response"]').contains('Facebook Description cannot be longer than 500 characters. ')
        cy.wait(1000);
        cy.get('#og-description').clear().type(descriptionC);  

        cy.wait(1000);
        cy.get('.ember-view.gh-app ').click();        
        cy.wait(2000);
 
        //Publish post
        POM.publishUpdatePP()
        cy.wait(2000);

    })

})