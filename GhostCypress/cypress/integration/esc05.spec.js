const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
let count = 0;

describe('Visit site login and create tag', () => {
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
        cy.wait(1000)
        //Create a tag
        POM.goToTags()
        cy.wait(1000)
        POM.takeScreenShot('esc05', count++);
        POM.createNewTag('TAG Esc-5')

        cy.wait(2000)
        POM.takeScreenShot('esc05', count++);
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)
        POM.takeScreenShot('esc05', count++);
        POM.elements.getPPT('TAG Esc-5').should('contain', 'TAG Esc-5')
        POM.takeScreenShot('esc05', count++);
        cy.get(`a[href="#/tags/tag-esc-5/"]`).then(($tag) => {
            expect($tag[0].innerText).to.equal('TAG Esc-5')
        }) // check if we create the tag
        POM.takeScreenShot('esc05', count++);

    })

})

