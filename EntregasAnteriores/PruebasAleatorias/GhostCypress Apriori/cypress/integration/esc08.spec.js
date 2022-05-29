const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST08;
const parrafo = pollData01.PARRAFO;

describe('Create draft post', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)

    })
       it('Login to ghost, Create title, Create content, Create Draft Post.', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);

        })
        cy.wait(1000)
        //Build a new post
        POM.buildNewPost(titulo, parrafo)
        cy.wait(1000)

        //Create Draft Post
        cy.get('.ember-view.items-center').click();
        cy.wait(2000);


    })

})