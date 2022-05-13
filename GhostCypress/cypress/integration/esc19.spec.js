const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('TAG19')
const titulo2 = Cypress.env('TAG19-1')

describe('Create, edit and delte Tag', () => {
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

        //Edit Tag
        cy.get('input[name="name"]').clear()
        cy.wait(1000)
        cy.get('input[name="name"]').type(titulo2, {force: true})
        cy.wait(1000)
        POM.elements.save().click()
        cy.wait(1000)
        //Verify edit
        POM.goToTags()
        cy.wait(4000)
        POM.elements.getPPT(titulo2).should('exist')
        cy.wait(2000)

        //Delete Tag
        POM.elements.getPPT(titulo2).click()
        cy.wait(1000)
        cy.get('span').contains('Delete tag').click()
        cy.wait(1000)
        POM.elements.confirmDelete().click({force: true})
        cy.wait(3000)
        POM.elements.getPPT(titulo2).should('not.exist')
        cy.wait(1000)

    })

})