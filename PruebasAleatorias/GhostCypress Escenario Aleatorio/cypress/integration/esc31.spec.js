const { faker } = require('@faker-js/faker');
const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = faker.lorem.word();
const color = faker.random.alpha(6);

describe('Create tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
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
         
        //Confirm tag could not be saved
        cy.get('p:contains("The color should be in valid hex format")').should('exist')
    })

})

