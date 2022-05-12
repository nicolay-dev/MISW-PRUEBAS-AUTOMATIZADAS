const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Visit site login and create tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
    })
    it('Login to ghost, goto timezone, change timezone, validate timezone', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        //Create a tag
        POM.elements.settingsGeneral().click()
        cy.wait(1000)
        cy.xpath("(//span[contains(text(),'Expand')])[2]").click()   
        cy.wait(1000)
        cy.get("#timezone").select("Asia/Tokyo")
        cy.wait(1000)
        cy.get('#timezone').find('option:selected').should('have.text', `\n    (GMT +9:00) Osaka, Sapporo, Tokyo\n`);

         // check if we create the tag

    })

})

