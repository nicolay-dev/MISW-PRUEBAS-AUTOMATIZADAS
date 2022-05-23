const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');
const takeScreenshots = false;

const username = pollData01.genericUsername;
const password = pollData01.genericPassword;
const titulo = pollData01.TAG19;
const titulo2 = pollData01.TAG191;
let screenShotCount= 0;

describe('Create, edit and delete Tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
    })
    it('Login to ghost, create tag, validate tag creation', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        //Create a tag
        POM.goToTags()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        POM.createNewTag(titulo)
        cy.wait(2000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        //Go to the tag section and validate the tag is created and access it
        POM.goToTags()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        POM.elements.getPPT(titulo).click()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};

        //Edit Tag
        cy.get('input[name="name"]').clear()
        cy.wait(1000)
        cy.get('input[name="name"]').type(titulo2, {force: true})
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        POM.elements.save().click()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        //Verify edit
        POM.goToTags()
        cy.wait(4000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        POM.elements.getPPT(titulo2).should('exist')
        cy.wait(2000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};

        //Delete Tag
        POM.elements.getPPT(titulo2).click()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        cy.get('span').contains('Delete tag').click()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        POM.elements.confirmDelete().click({force: true})
        cy.wait(3000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
        POM.elements.getPPT(titulo2).should('not.exist')
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};

    })

})