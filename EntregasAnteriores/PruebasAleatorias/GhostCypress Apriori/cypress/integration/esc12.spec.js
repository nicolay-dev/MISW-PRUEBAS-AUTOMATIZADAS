const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST12;
const parrafo = pollData01.PARRAFO;
let count= 0;

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
        
        //Create empyty Excertp
        cy.get('.ember-text-area.post-setting-custom-excerpt').type('{enter}');
        cy.wait(2000);
        
        POM.closeSettings()
        cy.wait(2000);
        
        //Pusblish Post
        POM.publishUpdatePP()
        cy.wait(2000);
        

    })

})