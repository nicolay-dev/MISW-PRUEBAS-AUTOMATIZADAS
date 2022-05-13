const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('TAG15')
const titulo2 = Cypress.env('TAG15-1')

describe('Create and edit Tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
    })
    it('Login to ghost, create tag, validate tag creation', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        //Create a tag
        POM.goToTags()
        cy.wait(1000)
        POM.createNewTag(titulo)

        cy.wait(2000)
        //Go to the tag section and validate the tag is created and access it
        POM.goToTags()
        cy.wait(1000)
        POM.elements.getPPT(titulo).click()
        cy.wait(1000)
        cy.get('input[name="name"]').clear()
        cy.wait(1000)
        cy.get('input[name="name"]').type(titulo2, {force: true})
        cy.wait(1000)
        POM.elements.save().click()
        cy.wait(1000)
        POM.goToTags()
        cy.wait(4000)
        POM.elements.getPPT(titulo2).should('exist')

    })

})