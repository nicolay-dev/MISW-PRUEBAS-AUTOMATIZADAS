

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST03')
const parrafo = Cypress.env('PARRAFO')
const urlLector = Cypress.env('URL-LECTOR')
let count = 0;


describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
  })
  it('Create post and delete it', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000);
    //Build a new post
    POM.buildNewPost(titulo, parrafo);
    cy.wait(1000);
    POM.publishUpdatePP();
    cy.wait(5000);
    POM.goToPosts();
    POM.clickOnLastCreatedPost();
    cy.wait(1000);
    POM.clickSettingsOnPP();
    cy.wait(1000);
    POM.deleteButtonClick();
    cy.wait(1000);
    cy.get('span').last().click();
    cy.wait(2000);
  
    // check if Post3 dont exist
    cy.get('a[title="Edit this post"]').then(($tag) => {
      expect($tag[1].innerText).to.not.includes(titulo);
    }) 

    POM.takeScreenShot('esc03', count++);


  })

})
