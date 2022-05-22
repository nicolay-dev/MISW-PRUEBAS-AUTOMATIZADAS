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

const username = pollData01.genericUsername;
const password = pollData01.genericPassword;
const titulo = pollData01.POST06;
const parrafo = pollData01.PARRAFO;
const tituloTag = pollData01.TAG06;
let count = 0;

describe('Create a post, create a tag and assign tag to post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc06', count++);
  })
  it('Creates a post, creates a tag and assign tag to post', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(2000)
    //Build a new post
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    POM.publishUpdatePP()
    cy.wait(4000)
    POM.returnToSectionView()


    //Create a Tag
    cy.wait(2000)
    POM.goToTags()
    cy.wait(2000)
    POM.createNewTag(tituloTag)
    cy.wait(2000)
    //Add Tag to Post
    POM.goToPosts()
    POM.elements.getPPT(titulo).click()
    cy.wait(2000)
    POM.clickSettingsOnPP()
    cy.wait(2000)
    cy.get('#tag-input').type(tituloTag, {force:true})
    cy.get('li').contains(tituloTag).click()
    cy.wait(2000)
    POM.closeSettings()
    cy.wait(1000)
    POM.publishUpdatePP()

    //Go to viewer site and confirm the post is published
    cy.wait(2000)
    POM.returnToSectionView()
    cy.wait(2000)
    POM.elements.viewSite().click()
    cy.wait(2000)
    POM.elements.getTaginSite(tituloTag).click()
    cy.wait(2000)
    POM.elements.getPostPageinTag(titulo).click()
    cy.wait(3000)
  })

})