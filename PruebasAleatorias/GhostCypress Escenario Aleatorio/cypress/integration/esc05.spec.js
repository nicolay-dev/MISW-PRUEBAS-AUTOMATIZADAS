const { faker } = require('@faker-js/faker');
const seed = Math.floor(Math.random()*200);
faker.seed(seed);
const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;

const titulo = faker.datatype.string(25);


describe('Create tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
         
    })
    it('05_3-Login to ghost, create tag, validate tag creation, oraculo Negativo, creación de tag con caracteres especiales. ', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(2000)
        //Create a tag
        POM.goToTags()
        cy.wait(1000)
        POM.createNewTag(titulo)
        cy.wait(2000)
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)
        POM.elements.getPPT(titulo).should('contain',titulo)
    })

})

