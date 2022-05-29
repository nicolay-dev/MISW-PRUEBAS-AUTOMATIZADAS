const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;

let sample = Math.floor(Math.random()*19);




describe('Create tag', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    //Generara datos seudodinamicos
    cy.generateFixture().then(()=>{
      cy.fixture('seudoDinamico').then(function (data) {
              this.data = data
          })
      })
})
    it('05_4-Login to ghost, create tag, validate tag creation oráculo Positivo, creación de tag con caracteres iguales a 191', function() {
        cy.log ('seed', this.data.seudo[sample].seed)
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
          
        cy.wait(2000)
        //Create a tag
          
        POM.goToTags()
        cy.wait(1000)
          
        POM.createNewTag(this.data.seudo[sample].alphanumeric191)

        cy.wait(2000)
          
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)
          
        POM.elements.getPPT(this.data.seudo[sample].alphanumeric191).should('contain',this.data.seudo[sample].alphanumeric191)
    })
    it('05_5-Login to ghost, create tag, validate tag creation oráculo Positivo, creación de tag con caracteres iguales a 190', function() {
        cy.log ('seed', this.data.seudo[sample].seed)
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
          
        cy.wait(2000)
        //Create a tag
          
        POM.goToTags()
        cy.wait(1000)
          
        POM.createNewTag(this.data.seudo[sample].alphanumeric190)

        cy.wait(2000)
          
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)
          
        POM.elements.getPPT(this.data.seudo[sample].alphanumeric190).should('contain',this.data.seudo[sample].alphanumeric190)
    })
        it('05_6-Login to ghost, create tag, validate tag creation oráculo Negativo, creación de tag con caracteres iguales a 192', function() {
        cy.log ('seed', this.data.seudo[sample].seed)
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
          
        cy.wait(2000)
        //Create a tag
          
        POM.goToTags()
        cy.wait(1000)
          
        POM.createNewTag(this.data.seudo[sample].alphanumeric192)

        cy.wait(2000)
        cy.get('p:contains("Tag names cannot be longer than 191 characters.")').should('be.visible')
          
        // Datos reales que puedan realizar la creación del tag name
        cy.get('input[name="name"]').clear()
        cy.get('input[name="name"]').type(this.data.seudo[sample].title, {force: true});
        cy.contains('Retry').click();

        cy.wait(2000)
        //Go to the tag section and validate the tag is created
        POM.goToTags()
        cy.wait(1000)
          
        POM.elements.getPPT(this.data.seudo[sample].alphanumeric192).should('contain',this.data.seudo[sample].alphanumeric192)
    })
})

