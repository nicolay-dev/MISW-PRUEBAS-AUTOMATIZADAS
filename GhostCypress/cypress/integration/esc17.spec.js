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
        cy.xpath('(//input[contains(@placeholder,"Label")])[1]').clear()
        cy.get('main[role="main"').scrollTo('top', {ensureScrollable:false})
        cy.wait(2000)
        cy.xpath('(//input[contains(@placeholder,"Label")])[1]').click()

        cy.wait(2000)
        cy.xpath('(//span)[18]').type("Lorem");
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

