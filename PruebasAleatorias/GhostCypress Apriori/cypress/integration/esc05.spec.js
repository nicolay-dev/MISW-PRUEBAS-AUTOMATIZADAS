const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.TAG05;
let count = 0;

describe('Create tag', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        cy.fixture('apriori').then(function (data) {
            this.data = data
        })
    })
    it('05-Login to ghost, create tag, validate tag creation oráculo positivo datos correctos', function() {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(2000)
        //Create a tag
         
        POM.goToTags()
        cy.wait(1000)
         
        POM.createNewTag(this.data.apriori[2].title)

        cy.wait(2000)
         
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)
         
        POM.elements.getPPT(this.data.apriori[2].title).should('contain',this.data.apriori[2].title)
    })

    it('05_2-Login to ghost, create tag, validate tag creation oráculo negativo tag sin nombre', function() {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(2000)
        //Create a tag
         
        POM.goToTags()
        cy.wait(1000)
         
        POM.elements.createTag().click();
        cy.wait(2000);
        // se deja vacío el título del tag
        // cy.get('input[name="name"]').type(titulo);
        POM.elements.save().click();

        cy.wait(2000)
        cy.get('p:contains("You must specify a name for the tag.")').should('be.visible')
        cy.wait(1000)
        // Colocar las condiciones para que la prueba pase
        cy.get('input[name="name"]').type(this.data.apriori[1].title);
        cy.contains('Retry').click();
        cy.wait(2000)
         
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)
         
        POM.elements.getPPT(this.data.apriori[1].title).should('contain',this.data.apriori[1].title)
    })
})

