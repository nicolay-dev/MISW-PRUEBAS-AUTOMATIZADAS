const { faker } = require('@faker-js/faker');
const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');
const username = pollData01.username;
const password = pollData01.password;
const texto = faker.lorem.sentences(3);
const url = pollData01.ownURL;


describe('Create Page', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(2000)
    })
    it('Creates a page with Meta title', () => {
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
        //Edit meta data
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Meta data")').click()
        cy.wait(500)
        cy.get('input[name="post-setting-meta-title"]').type(faker.lorem.words(2))
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

    it('Creates a page with Meta description', () => {
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
        //Edit meta data
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Meta data")').click()
        cy.wait(500)
        cy.get('textarea[name="post-setting-meta-description"]').type(faker.lorem.sentences(2))
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

    it('Creates a page with Meta Canonical URL', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(2000)
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
        // Create a new page
        POM.createNewPage(faker.lorem.words(3), texto)
        cy.wait(1000)
        //Edit meta data
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Meta data")').click()
        cy.wait(500)
        cy.get('input[name="post-setting-canonicalUrl"]').type(url+faker.random.alphaNumeric(4))
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

    it('Creates a page with Meta title too long', () => {
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
        //Edit meta data
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Meta data")').click()
        cy.wait(500)
        cy.get('input[name="post-setting-meta-title"]').type(faker.random.alphaNumeric(301))
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
        //Try saving post
        POM.closeSettings()
        POM.publishUpdatePP()
        cy.wait(2000)
        //Confirm post could not be published
        cy.get(".gh-alert-content").should('exist')
    })

    it('Creates a page with Meta description too long', () => {
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
        //Edit meta data
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Meta data")').click()
        cy.wait(500)
        cy.get('textarea[name="post-setting-meta-description"]').type(faker.random.alphaNumeric(501))
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
        //Try saving post
        POM.closeSettings()
        POM.publishUpdatePP()
        cy.wait(2000)
        //Confirm post could not be published
        cy.get(".gh-alert-content").should('exist')
    })

    it('Creates a page with Meta Canonical URL not valid', () => {
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
        //Edit meta data
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Meta data")').click()
        cy.wait(500)
        cy.get('input[name="post-setting-canonicalUrl"]').type(faker.random.alphaNumeric(15))
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

