const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
let count = 0;


describe('Edit label', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        cy.fixture('apriori').then(function (data) {
            this.data = data
        })
    })
    it('Login to ghost, edit home for Lorem, go to visit page, validate edit', function() {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
         
        cy.contains('Design').click()
        cy.wait(2000)
         
        //Change firt tab
        cy.get('body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > input:nth-child(1)').clear()
        cy.get('main[role="main"').scrollTo('top', {ensureScrollable:false})
        cy.wait(2000)
        cy.get('body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > input:nth-child(1)').click({force: true})

        cy.wait(2000)
        cy.get('body > div:nth-child(4) > div:nth-child(3) > main:nth-child(2) > section:nth-child(1) > section:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1) > input:nth-child(1)').type(this.data.apriori[1].Lorem, {force:true});
        cy.wait(1000)
         
        POM.elements.save().click()
        //Go to visit page
        cy.wait(1000)
         
        cy.get("a[href='#/site/']").click()
        cy.wait(1000)
        cy.getIframeBody().find("div[class='outer site-header-background responsive-header-img'] li[class='nav-lorem nav-current'] a").should('contain',this.data.apriori[1].Lorem);
         
    })

})

