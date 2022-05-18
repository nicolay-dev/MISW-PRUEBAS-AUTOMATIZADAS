const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST20;
const parrafo = pollData01.PARRAFO;
let count = 0;

describe('Create post with Facebook card', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc20', count++);
    })
       it('Login to ghost, add title, add content and create facebook card', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
          POM.takeScreenShot('esc20', count++);
        })
        cy.wait(1000);
        //Create new post
        POM.buildNewPost(titulo,parrafo)
        cy.wait(2000)
        POM.takeScreenShot('esc20', count++);
        POM.clickSettingsOnPP()
        cy.wait(2000)
        POM.takeScreenShot('esc20', count++);
        //Add facebook card
        cy.get('b').contains("Facebook card").click();       
        cy.wait(1000);
        POM.takeScreenShot('esc20', count++);
        //Sert Card title
        cy.get('.ember-view.post-setting-og-description').type("PRUEBA TITULO TARJETA FACEBOOK");
        cy.wait(1000);
        POM.takeScreenShot('esc20', count++);
        cy.get('.ember-view.gh-app ').click();
        cy.wait(2000);
        POM.takeScreenShot('esc20', count++);
        //Publish post
        POM.publishUpdatePP()
        cy.wait(2000);
        POM.takeScreenShot('esc20', count++);
    })

})