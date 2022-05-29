const { faker } = require('@faker-js/faker');
const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');
const username = pollData01.username;
const password = pollData01.password;


describe('Create Page with code injection', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(2000)
    })
    it('Creates Page with code injection - Header too long', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
        // Create a new page
        POM.createNewPage(faker.lorem.words(3), faker.lorem.sentences(3))
        cy.wait(1000)
        //Edit Facebook card
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Code injection")').click()
        cy.wait(500)
        cy.get('div[id="post-setting-codeinjection-head"]').type(faker.random.alphaNumeric(65536))
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
        cy.wait(500)
        POM.closeSettings()
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        //Confirm page could not be published
        cy.get(".gh-alert-content").should('exist')
    })

    it('Creates Page with code injection - Footer too long', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
        // Create a new page
        POM.createNewPage(faker.lorem.words(3), faker.lorem.sentences(3))
        cy.wait(1000)
        //Edit Facebook card
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Code injection")').click()
        cy.wait(500)
        cy.get('div[id="post-setting-codeinjection-foot"]').type(faker.random.alphaNumeric(65536))
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
        cy.wait(500)
        POM.closeSettings()
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        //Confirm page could not be published
        cy.get(".gh-alert-content").should('exist')
    })
    
})

