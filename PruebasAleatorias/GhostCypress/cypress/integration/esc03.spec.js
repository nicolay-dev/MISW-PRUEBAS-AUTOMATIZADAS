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
const pollData01 = Cypress.env('poolData01');
const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST03;
const parrafo = pollData01.PARRAFO;
let count = 0;


describe('Create and delete post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc03', count++);
  })
  it('Create post and delete it', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    POM.takeScreenShot('esc03', count++);
    cy.wait(1000);
    //Build a new post
    POM.takeScreenShot('esc03', count++);
    POM.buildNewPost(titulo, parrafo);
    cy.wait(1000);
    POM.takeScreenShot('esc03', count++);
    POM.publishUpdatePP();
    cy.wait(5000);
    POM.takeScreenShot('esc03', count++);
    POM.returnToSectionView();
    //Go to viewer site and confirm the post is published
    cy.wait(2000);
    POM.takeScreenShot('esc03', count++);
    POM.viewReaderSite();
    cy.wait(2000);
    POM.takeScreenShot('esc03', count++);
    POM.elements.getPostPageinSite(titulo).click();
    cy.wait(3000);
    POM.takeScreenShot('esc03', count++);
    //Delete post
    cy.visit(url)
    cy.wait(2000)
    POM.takeScreenShot('esc03', count++);
    POM.goToPosts();
    POM.takeScreenShot('esc03', count++);
    POM.elements.getPPT(titulo).click()
    cy.wait(1000);
    POM.takeScreenShot('esc03', count++);
    POM.clickSettingsOnPP();
    cy.wait(2000);
    POM.takeScreenShot('esc03', count++);
    cy.wait(1000);
    POM.deleteButtonClick();
    cy.wait(2000);
    POM.takeScreenShot('esc03', count++);
    POM.elements.confirmDelete().click({force: true});
    //Check in viewer site post is no longer there
    cy.wait(3000);
    POM.takeScreenShot('esc03', count++);
    POM.viewReaderSite();
    cy.wait(2000);
    POM.takeScreenShot('esc03', count++);
    POM.elements.getPostPageinSite(titulo).should('not.exist');
    cy.wait(3000);

  })

})
