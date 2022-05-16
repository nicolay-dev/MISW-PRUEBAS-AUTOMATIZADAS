const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
let count = 0;


describe('Edit label', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc13', count++);
    })
    it('Login to ghost, edit home for Lorem, go to visit page, validate edit', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        POM.takeScreenShot('esc13', count++);
        cy.contains('Design').click()
        cy.wait(2000)
        POM.takeScreenShot('esc13', count++);
        //Change firt tab
        cy.get('body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > input:nth-child(1)').clear()
        cy.get('main[role="main"').scrollTo('top', {ensureScrollable:false})
        cy.wait(2000)
        cy.get('body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > input:nth-child(1)').click()

        cy.wait(2000)
        cy.get('body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > input:nth-child(1)').type("Lorem", {force: true});
        cy.wait(1000)
        POM.takeScreenShot('esc13', count++);
        POM.elements.save().click()
        //Go to visit page
        cy.wait(1000)
        POM.takeScreenShot('esc13', count++);
        cy.get("a[href='#/site/']").click()
        cy.wait(1000)
        cy.getIframeBody().find("div[class='outer site-header-background responsive-header-img'] li[class='nav-lorem nav-current'] a").should('contain',"Lorem");
        POM.takeScreenShot('esc13', count++);
    })

})

