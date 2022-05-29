const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;


// Este es mi pool de datos seudo dinámicos para la prueba   
let pages =[];


describe('Create and edit page', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
        //Generara datos seudodinamicos
        cy.generateFixture().then(()=>{
        cy.fixture('seudoDinamico').then(function (data) {
                this.data = data
                cy.log('data', this.data.seudo[0].title)
            })
        })
    })
    
    it('09-Login to ghost, create page, publish page, edit title of page, validate  page edited with seed oraculo positivo', function(){  
        cy.log ('seed', this.data.seudo[0].seed)
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        cy.wait(1000)
   
        //Create a page
        // Go to Pages
        POM.goToPages()
        cy.wait(1000)
   
        // Create a new page
        POM.createNewPage(this.data.seudo[0].title, this.data.seudo[0].content)
        cy.wait(1000)
   
        // Publish the page
        POM.publishUpdatePP()
        cy.wait(1000)
   
        POM.elements.managePages().click()
        cy.wait(1000)
   
        // Edit the title of the page
        POM.elements.getPPT(this.data.seudo[0].title).click( {force: true})
        cy.get('.gh-editor-title').type(this.data.seudo[0].titleEdit)
        cy.wait(2000);
   
        POM.publishUpdatePP()
         cy.wait(1000)
         cy.wait(1000)
    
         POM.elements.managePages().click()
         cy.wait(1000)
    
            // Validate the title of the page

            cy.get("h3",  {force: true}).then(($title) => {
                expect($title).to.contain(`${this.data.seudo[0].title}`+`${this.data.seudo[0].titleEdit}`)
              }) // Check if the title is the same as the one we edited
         
    })
    
})