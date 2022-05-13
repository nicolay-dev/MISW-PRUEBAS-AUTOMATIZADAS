Cypress.on('uncaught:exception', (err) => {
  // we expect a 3rd party library error with message 'Cannot read properties of null (reading 'querySelector')'
  // and don't want to fail the test so we return false
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const username = Cypress.env('username')
const password = Cypress.env('password')
const titulo = Cypress.env('POST04')
const titulo2 = Cypress.env('POST04_1')
const parrafo = Cypress.env('PARRAFO')
let count = 0;

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc04', count++);
  })
  it('Login to ghost, create title, create content, publish and edit title.', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    POM.takeScreenShot('esc04', count++);
    cy.wait(2000)
    //Build a new post
    POM.takeScreenShot('esc04', count++);
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    POM.takeScreenShot('esc04', count++);
    POM.publishUpdatePP()
    cy.wait(4000)
    POM.takeScreenShot('esc04', count++);
    //Back to return view
    POM.returnToSectionView()
    cy.wait(2000);
    POM.takeScreenShot('esc04', count++);
    //Go to viewer site and confirm the post is published
    POM.viewReaderSite();
    cy.wait(2000)
    POM.takeScreenShot('esc04', count++);
    POM.elements.getPostPageinSite(titulo).click()
    cy.wait(3000)
    POM.takeScreenShot('esc04', count++);
    //Return to edit post
    cy.visit(url)
    cy.wait(2000)
    POM.takeScreenShot('esc04', count++);
    POM.goToPosts();
    POM.takeScreenShot('esc04', count++);
    POM.elements.getPPT(titulo).click()
    cy.wait(1000);
    POM.takeScreenShot('esc04', count++);
    //Change title
    POM.editTitlePost(titulo2);
    cy.wait(2000);
    POM.takeScreenShot('esc04', count++);
    //Publish post
    POM.publishUpdatePP()
    POM.takeScreenShot('esc04', count++);
    //Verify edited post
    POM.returnToSectionView()
    cy.wait(2000);
    POM.takeScreenShot('esc04', count++);
    POM.viewReaderSite();
    cy.wait(2000)
    POM.takeScreenShot('esc04', count++);
    POM.elements.getPostPageinSite(titulo2).click()
    cy.wait(3000)
    POM.takeScreenShot('esc04', count++);
  })

})