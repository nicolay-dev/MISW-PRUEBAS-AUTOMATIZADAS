const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Visit site login and create tag', () => {
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
        POM.createNewTag('TAG Esc-5')

        cy.wait(2000)
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)
        cy.get(`a[href="#/tags/tag-esc-5/"]`).should('contain', 'TAG Esc-5')

        cy.get(`a[href="#/tags/tag-esc-5/"]`).then(($tag) => {
            expect($tag[0].innerText).to.equal('TAG Esc-5')
        }) // check if we create the tag


    })

})

