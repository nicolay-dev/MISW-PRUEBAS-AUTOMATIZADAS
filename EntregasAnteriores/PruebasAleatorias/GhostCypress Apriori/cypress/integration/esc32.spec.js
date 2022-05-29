const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST20;
const parrafo = pollData01.PARRAFO;
const htmlInjection = '<iframe src="https://player.vimeo.com/video/710119524?h=387ca7f0f8" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><p><a href="https://vimeo.com/710119524">The Art of Work</a> from <a href="https://vimeo.com/user5908197">Julien Jarry</a> on <a href="https://vimeo.com">Vimeo</a>.</p>'

let count = 0;

describe('Add global footer/header ', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        
    })
7*
       it('Login to ghost and add empty header', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
          
        })
        cy.wait(1000);
        
        //Add empty footer
        cy.get('#ember42').click(); 
        cy.wait(1000)
        cy.get('#ghost-head > .CodeMirror > .CodeMirror-scroll').type('{enter}')
        cy.wait(4000)
        
    })

   
    it('Login to ghost and add functional header', () => {  
      cy.get('form').within(() => {
        POM.signIn(username, password);
        
      })
      cy.wait(1000);
      //Create new post
      //Add empty footer
       cy.get('#ember42').click(); 
       cy.wait(1000)
       cy.get('#ghost-head > .CodeMirror > .CodeMirror-scroll').type(htmlInjection)
       cy.wait(4000)
      
    })


    it('Login to ghost and add empty footer', () => {  
      cy.get('form').within(() => {
        POM.signIn(username, password);
        
      })

        cy.wait(1000);
        
        //Add empty footer
        cy.get('#ember42').click(); 
        cy.wait(1000)
        cy.get('#ghost-foot > .CodeMirror > .CodeMirror-scroll').type('{enter}')
        cy.wait(4000)
      
    })
  
    it('Login to ghost and add functional footer', () => {  
    cy.get('form').within(() => {
      POM.signIn(username, password);

      cy.wait(1000);
        
      //Add functional footer
      cy.get('#ember42').click()
      cy.wait(3000)
      cy.get('#ghost-foot > .CodeMirror > .CodeMirror-scroll').type(htmlInjection)
      cy.wait(4000)
      })
    })
  
})

