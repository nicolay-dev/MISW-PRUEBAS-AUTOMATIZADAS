const { faker } = require('@faker-js/faker');
const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');
const username = pollData01.username;
const password = pollData01.password;
const texto = faker.lorem.sentences(3);


describe('Create Page with Facebook card', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(2000)
    })
    it('Creates a page with Facebook card title', () => {
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
        cy.get('button b:contains("Facebook card")').click()
        cy.wait(500)
        cy.get('input[name="post-setting-og-title"]').type(faker.lorem.words(2))
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
        POM.closeSettings()
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        //Visit page
        POM.clickSettingsOnPP()
        cy.get('a[class="post-view-link"]').invoke('removeAttr', 'target').click()
        cy.wait(2000)
    })

    it('Creates a page with Facebook card description', () => {
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
        cy.get('button b:contains("Facebook card")').click()
        cy.wait(500)
        cy.get('textarea[name="post-setting-og-description"]').type(faker.lorem.sentences(2))
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
        POM.closeSettings()
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        //Visit page
        POM.clickSettingsOnPP()
        cy.get('a[class="post-view-link"]').invoke('removeAttr', 'target').click()
        cy.wait(1000)
    })

    it('Creates a page with Facebook card title too long', () => {
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
        cy.get('button b:contains("Facebook card")').click()
        cy.wait(500)
        cy.get('input[name="post-setting-og-title"]').type(faker.random.alphaNumeric(301))
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
        //Try saving post
        POM.closeSettings()
        POM.publishUpdatePP()
        cy.wait(2000)
        //Confirm post could not be published
        cy.get(".gh-alert-content").should('exist')
    })

    it('Creates a page with Facebook card description too long', () => {
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
        cy.get('button b:contains("Facebook card")').click()
        cy.wait(500)
        cy.get('textarea[name="post-setting-og-description"]').type(faker.random.alphaNumeric(501))
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
        //Try saving post
        POM.closeSettings()
        POM.publishUpdatePP()
        cy.wait(2000)
        //Confirm post could not be published
        cy.get(".gh-alert-content").should('exist')
    })
    
})

