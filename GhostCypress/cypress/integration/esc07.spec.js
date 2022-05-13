

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST07')
const parrafo = Cypress.env('PARRAFO')
const urlLector = Cypress.env('URL-LECTOR')

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
    cy.get('span').contains('Publish').click();
    cy.wait(1000);
    cy.get('div').contains('Schedule it for later').click();
    cy.wait(1000);
    cy.get('span').contains('Schedule').click();
    cy.wait(301000);
    POM.goToPosts();
    
    // check if Post7 was create
    cy.get('a[title="Edit this post"]').then(($tag) => {
      expect($tag[1].innerText).to.includes(titulo);
    }) 

  })

  // const file_name = 'esc07';
  // let screenshot_count=0;

  // function takeScreenShot() {
  //   cy.screenshot(`${this.file_name + this.screenshot_count++}`);
  // }

})
