const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.TAG15;
const titulo2 = pollData01.TAG151;
let count= 0;

describe('Create and edit Tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc19', count++);
    })
    it('Login to ghost, create tag, validate tag creation', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        POM.takeScreenShot('esc19', count++);
        //Create a tag
        POM.goToTags()
        cy.wait(1000)
        POM.takeScreenShot('esc19', count++);
        POM.createNewTag(titulo)

        cy.wait(2000)
        POM.takeScreenShot('esc19', count++);
        //Go to the tag section and validate the tag is created and access it
        POM.goToTags()
        cy.wait(1000)
        POM.takeScreenShot('esc19', count++);
        POM.elements.getPPT(titulo).click()
        cy.wait(1000)
        POM.takeScreenShot('esc19', count++);
        cy.get('input[name="name"]').clear()
        cy.wait(1000)
        cy.get('input[name="name"]').type(titulo2, {force: true})
        cy.wait(1000)
        POM.takeScreenShot('esc19', count++);
        POM.elements.save().click()
        cy.wait(1000)
        POM.takeScreenShot('esc19', count++);
        POM.goToTags()
        cy.wait(4000)
        POM.takeScreenShot('esc19', count++);
        POM.elements.getPPT(titulo2).should('exist')
        POM.takeScreenShot('esc19', count++);
    })

})