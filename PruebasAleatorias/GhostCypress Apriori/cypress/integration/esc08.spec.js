const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST08;
const parrafo = pollData01.PARRAFO;
let count =0;

describe('Create draft post', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc08', count++);
    })
       it('Login to ghost, Create title, Create content, Create Draft Post.', () => {  
        cy.get('form').within(() => {
          POM.signIn(username, password);
          POM.takeScreenShot('esc08', count++);
        })
        cy.wait(1000)
        //Build a new post
        POM.buildNewPost(titulo, parrafo)
        cy.wait(1000)
        POM.takeScreenShot('esc08', count++);
        //Create Draft Post
        cy.get('.ember-view.items-center').click();
        cy.wait(2000);
        POM.takeScreenShot('esc08', count++);

    })

})