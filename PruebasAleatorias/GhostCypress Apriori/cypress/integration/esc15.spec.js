const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');
const takeScreenshots = false;

const username = pollData01.genericUsername;
const password = pollData01.genericPassword;
const titulo = pollData01.TAG15;
const titulo2 = pollData01.TAG151;
let screenShotCount= 0;

describe('Create and edit Tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
    })
    it('Login to ghost, create tag, validate tag creation', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
        //Create a tag
        POM.goToTags()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
        POM.createNewTag(titulo)

        cy.wait(2000)
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
        //Go to the tag section and validate the tag is created and access it
        POM.goToTags()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
        POM.elements.getPPT(titulo).click()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
        cy.get('input[name="name"]').clear()
        cy.wait(1000)
        cy.get('input[name="name"]').type(titulo2, {force: true})
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
        POM.elements.save().click()
        cy.wait(1000)
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
        POM.goToTags()
        cy.wait(4000)
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
        POM.elements.getPPT(titulo2).should('exist')
        takeScreenshots ? POM.takeScreenShot('esc07', screenShotCount++): {};
    })

})