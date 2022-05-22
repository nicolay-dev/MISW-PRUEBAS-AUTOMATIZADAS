const { faker } = require('@faker-js/faker');
const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');
const username = pollData01.genericUsername;
const password = pollData01.genericPassword;
const texto = faker.lorem.sentences(3);


describe('Create Page with Excerpt', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(2000)
    })
    it('Creates a page with Excerpt', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
        // Create a new page
        POM.createNewPage(faker.lorem.words(3), texto)
        cy.wait(1000)
        //Edit Facebook card
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('textarea[name="post-setting-custom-excerpt"]').type(faker.lorem.words(5))
        cy.wait(500)
        POM.closeSettings()
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        //Visit page
        POM.clickSettingsOnPP()
        cy.get('a[class="post-view-link"]').invoke('removeAttr', 'target').click()
        cy.wait(2000)
    })


    it('Creates a page with Excerpt too long', () => {
        cy.get('form').within(() => {
          POM.signIn(username, password);
        })
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
        // Create a new page
        POM.createNewPage(faker.lorem.words(3), texto)
        cy.wait(1000)
        //Edit Facebook card
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('textarea[name="post-setting-custom-excerpt"]').type(faker.random.alphaNumeric(301))
        //Try saving post
        POM.closeSettings()
        POM.publishUpdatePP()
        cy.wait(2000)
        //Confirm post could not be published
        cy.get(".gh-alert-content").should('exist')
    })
    
})

