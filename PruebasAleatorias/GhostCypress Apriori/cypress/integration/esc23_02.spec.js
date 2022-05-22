const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST20;
const parrafo = pollData01.PARRAFO;
const htmlInjection = '<iframe src="https://player.vimeo.com/video/710119524?h=387ca7f0f8" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><p><a href="https://vimeo.com/710119524">The Art of Work</a> from <a href="https://vimeo.com/user5908197">Julien Jarry</a> on <a href="https://vimeo.com">Vimeo</a>.</p>'

let count = 0;

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
        cy.get('b').contains("Code injection").click();       
        cy.wait(1000);
        
        //Set footer injection
        cy.get('#post-setting-codeinjection-head > .CodeMirror > .CodeMirror-scroll').type(htmlInjection)
        cy.get('.ember-view.gh-app ').click();
        cy.wait(2000);
        
        //Publish post
        POM.publishUpdatePP()
        cy.wait(2000);
        
    })

})
