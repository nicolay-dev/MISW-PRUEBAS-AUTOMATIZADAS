const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');
const username = pollData01.genericUsername;
const password = pollData01.genericPassword;
const titulo = pollData01.PAGE30;
const titulo2 = pollData01.PAGE30_1;
const texto = pollData01.PARRAFO;
const header = pollData01.CODE30HEADER;
const footer = pollData01.CODE30FOOTER;


describe('Create Page with code injection', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(2000)
    })
    it('Creates Page with code injection - Header', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
        // Create a new page
        POM.createNewPage(titulo, texto)
        cy.wait(1000)
        //Edit Facebook card
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Code injection")').click()
        cy.wait(500)
        cy.get('div[id="post-setting-codeinjection-head"]').type(header)
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
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

    it('Creates Page with code injection - Footer', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
        // Create a new page
        POM.createNewPage(titulo2, texto)
        cy.wait(1000)
        //Edit Facebook card
        POM.clickSettingsOnPP()
        cy.wait(500)
        cy.get('button b:contains("Code injection")').click()
        cy.wait(500)
        cy.get('div[id="post-setting-codeinjection-foot"]').type(footer)
        cy.wait(500)
        cy.get('button[aria-label="Back"]').click()
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
    
})

