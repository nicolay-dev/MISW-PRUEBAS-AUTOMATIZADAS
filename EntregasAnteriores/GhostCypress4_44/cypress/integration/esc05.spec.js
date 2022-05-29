const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('TAG05')
let count = 0;

describe('Create Tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc05', count++);
    })
    it('Login to ghost, create tag, validate tag creation', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        POM.takeScreenShot('esc05', count++);
        cy.wait(2000)
        //Create a tag
        POM.takeScreenShot('esc05', count++);
        POM.goToTags()
        cy.wait(1000)
        POM.takeScreenShot('esc05', count++);
        POM.createNewTag(titulo)

        cy.wait(2000)
        POM.takeScreenShot('esc05', count++);
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)
        POM.takeScreenShot('esc05', count++);
        POM.elements.getPPT(titulo).should('contain',titulo)
    })

})

