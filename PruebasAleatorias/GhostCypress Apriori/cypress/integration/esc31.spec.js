const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.TAG31;
const color = pollData01.TAG31COLOR;

describe('Create tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        cy.fixture('apriori').then(function (data) {
            this.data = data
        })
    })
    it('Creates Tag with color', function() {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(2000)
        //Create a tag
         
        POM.goToTags()
        cy.wait(1000)
         
        POM.elements.createTag().click();
        cy.wait(2000);
        cy.get('input[name="name"]').type(titulo);
        cy.wait(500)
        cy.get('input[name="accent-color"]').type(color);
        POM.elements.save().click();
         
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)  
        POM.elements.getPPT(titulo).should('exist')
    })

})

