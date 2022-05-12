const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')



describe('Visit site login and create tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
    })
    it('Login to ghost, edit home for Lorem, go to visit page, validate edit', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.contains('Design').click()
        cy.wait(2000)
        //Change firt tab
        cy.xpath('(//input[contains(@placeholder,"Label")])[1]').clear()
        cy.get('main[role="main"').scrollTo('top', {ensureScrollable:false})
        cy.wait(2000)
        cy.xpath('(//input[contains(@placeholder,"Label")])[1]').click()
        
        cy.wait(2000)
        cy.xpath('(//span)[18]').type("Lorem");
        POM.elements.save().click()
        //Go to visit page
        cy.wait(1000)
        cy.get("a[href='#/site/']").click()
        cy.wait(1000)
        cy.getIframeBody().find("div[class='outer site-header-background responsive-header-img'] li[class='nav-lorem nav-current'] a").should('contain',"Lorem");

    })

})

