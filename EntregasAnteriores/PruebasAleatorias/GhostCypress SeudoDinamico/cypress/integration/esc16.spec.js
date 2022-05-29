import {faker} from '@faker-js/faker'

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = faker.lorem.word(10);
const parrafo = faker.lorem.paragraph(2)
const tituloT = faker.random.alphaNumeric(300);
const tituloT5 = faker.random.alphaNumeric(301);
const titulogG5 = faker.random.words(2);
const description7T = faker.random.alphaNumeric(500);
const description8T = faker.random.alphaNumeric(501);
const description8C = faker.random.alphaNumeric(300);

let count = 0; 

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
        cy.get('#twitter-title').type(tituloT);
        cy.wait(1000);
        
        cy.get('.ember-view.gh-app ').click();        
        cy.wait(2000);
        
        //Publish post
        POM.publishUpdatePP()
        cy.wait(2000);
        
    })
    it('Login to ghost, add title, add content, add twitter card with description.5', () => {  
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
      cy.get('#twitter-title').type(tituloT5);
      cy.wait(1000);
      cy.get('.active > .settings-menu-header').click()
      cy.wait(1000);
      cy.get('div[class="form-group error ember-view"] p[class="response"]').contains('Twitter Title cannot be longer than 300 characters. ')
      cy.wait(1000);
      cy.get('#twitter-title').clear().type(titulogG5);            

      cy.get('.ember-view.gh-app ').click();        
      cy.wait(2000);
      
      //Publish post
      POM.publishUpdatePP()
      cy.wait(2000);
      
  })
  it('Login to ghost, add title, add content, add twitter card with description7.', () => {  
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
    cy.get('#twitter-description').type(description7T);
    cy.wait(1000);
    cy.get('.ember-view.gh-app ').click();        
    cy.wait(2000);
    
    //Publish post
    POM.publishUpdatePP()
    cy.wait(2000);
    
})

it('Login to ghost, add title, add content, add twitter card with description 8.', () => {  
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
  cy.get('#twitter-description').type(description8T);
  cy.wait(1000);
  cy.get('.active > .settings-menu-header').click()
  cy.wait(1000);
  cy.get('div[class="form-group error ember-view"] p[class="response"]').contains('Twitter Description cannot be longer than 500 characters. ')
  cy.wait(1000);
  cy.get('#twitter-description').clear().type(description8C);            

  cy.get('.ember-view.gh-app ').click();        
  cy.wait(2000);
  
  //Publish post
  POM.publishUpdatePP()
  cy.wait(2000);
  
})

})