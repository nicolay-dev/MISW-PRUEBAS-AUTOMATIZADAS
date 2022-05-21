const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.PAGE14;
const texto = pollData01.PARRAFO;
let count = 0;

describe('Create Page', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc14', count++);
    })
    it('Login to ghost, create page, publish page, edit title of page, validate  page edited', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        POM.takeScreenShot('esc14', count++);
        cy.wait(2000)
        //Create a page
        // Go to Pages
        POM.takeScreenShot('esc14', count++);
        POM.goToPages()
        cy.wait(1000)
        POM.takeScreenShot('esc14', count++);
        // Create a new page
        POM.createNewPage(titulo, texto)
        cy.wait(1000)
        POM.takeScreenShot('esc14', count++);
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
        POM.takeScreenShot('esc14', count++);
        //Visit page
        POM.clickSettingsOnPP()
        cy.get('a[class="post-view-link"]').invoke('removeAttr', 'target').click()
        cy.wait(4000)
        POM.takeScreenShot('esc14', count++);

    })

})

