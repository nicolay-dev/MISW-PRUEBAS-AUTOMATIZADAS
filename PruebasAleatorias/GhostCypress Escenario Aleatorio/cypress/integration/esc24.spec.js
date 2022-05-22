const { faker } = require('@faker-js/faker');

Cypress.on('uncaught:exception', (err) => {
  // we expect a 3rd party library error with message 'Cannot read properties of null (reading 'querySelector')'
  // and don't want to fail the test so we return false
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})

const POM = require("../POM/POM");
const pollData01 = Cypress.env('poolData01');
const url = pollData01.ownURL;
const username = pollData01.genericUsername;
const password = pollData01.genericPassword;
const titulo = faker.lorem.words(3);
const titulo2 = faker.lorem.words(3);
const titulo3 = faker.lorem.words(3);
const parrafo = faker.lorem.sentences(3);

describe('Create a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(2000)
  })

  it('Creates a post with Meta title', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    //Edit meta data
    POM.clickSettingsOnPP()
    cy.wait(500)
    cy.get('button b:contains("Meta data")').click()
    cy.wait(500)
    cy.get('input[name="post-setting-meta-title"]').type(faker.lorem.words(2))
    cy.wait(500)
    cy.get('button[aria-label="Back"]').click()
    //Try saving post
    POM.closeSettings()
    POM.publishUpdatePP()
    cy.wait(2000)
    POM.returnToSectionView()
    cy.wait(1000)
    //Go to viewer site and confirm the post is published
    POM.viewReaderSite();
    cy.wait(1000)
    POM.elements.getPostPageinSite(titulo).click()
    cy.wait(2000)

  })

  it('Creates a post with Meta description', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo2, parrafo)
    cy.wait(1000)
    //Edit meta data
    POM.clickSettingsOnPP()
    cy.wait(500)
    cy.get('button b:contains("Meta data")').click()
    cy.wait(500)
    cy.get('textarea[name="post-setting-meta-description"]').type(faker.lorem.sentences(2))
    cy.wait(500)
    cy.get('button[aria-label="Back"]').click()
    //Try saving post
    POM.closeSettings()
    POM.publishUpdatePP()
    cy.wait(2000)
    POM.returnToSectionView()
    cy.wait(1000)
    //Go to viewer site and confirm the post is published
    POM.viewReaderSite();
    cy.wait(1000)
    POM.elements.getPostPageinSite(titulo2).click()
    cy.wait(2000)

  })

  it('Creates a post with Meta Canonical URL', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(titulo3, parrafo)
    cy.wait(1000)
    //Edit meta data
    POM.clickSettingsOnPP()
    cy.wait(500)
    cy.get('button b:contains("Meta data")').click()
    cy.wait(500)
    cy.get('input[name="post-setting-canonicalUrl"]').type(url+faker.random.alphaNumeric(4))
    cy.wait(500)
    cy.get('button[aria-label="Back"]').click()
    //Try saving post
    POM.closeSettings()
    POM.publishUpdatePP()
    cy.wait(2000)
    POM.returnToSectionView()
    cy.wait(1000)
    //Go to viewer site and confirm the post is published
    POM.viewReaderSite();
    cy.wait(1000)
    POM.elements.getPostPageinSite(titulo3).click()
    cy.wait(2000)

  })

  it('Creates a post with Meta title too long', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(faker.lorem.words(3), parrafo)
    cy.wait(1000)
    //Edit meta data
    POM.clickSettingsOnPP()
    cy.wait(500)
    cy.get('button b:contains("Meta data")').click()
    cy.wait(500)
    cy.get('input[name="post-setting-meta-title"]').type(faker.random.alphaNumeric(301))
    cy.wait(500)
    cy.get('button[aria-label="Back"]').click()
    //Try saving post
    POM.closeSettings()
    POM.publishUpdatePP()
    cy.wait(2000)
    //Confirm post could not be published
    cy.get(".gh-alert-content").should('exist')

  })

  it('Creates a post with Meta description too long', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(faker.lorem.words(3), parrafo)
    cy.wait(1000)
    //Edit meta data
    POM.clickSettingsOnPP()
    cy.wait(500)
    cy.get('button b:contains("Meta data")').click()
    cy.wait(500)
    cy.get('textarea[name="post-setting-meta-description"]').type(faker.random.alphaNumeric(501))
    cy.wait(500)
    cy.get('button[aria-label="Back"]').click()
    //Try saving post
    POM.closeSettings()
    POM.publishUpdatePP()
    cy.wait(2000)
    //Confirm post could not be published
    cy.get(".gh-alert-content").should('exist')

  })

  it('Creates a post with Meta Canonical URL not valid', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    //Build a new post
    POM.buildNewPost(faker.lorem.words(3), parrafo)
    cy.wait(1000)
    //Edit meta data
    POM.clickSettingsOnPP()
    cy.wait(500)
    cy.get('button b:contains("Meta data")').click()
    cy.wait(500)
    cy.get('input[name="post-setting-canonicalUrl"]').type(faker.random.alphaNumeric(21))
    cy.wait(500)
    cy.get('button[aria-label="Back"]').click()
    //Try saving post
    POM.closeSettings()
    POM.publishUpdatePP()
    cy.wait(2000)
    //Confirm post could not be published
    cy.get(".gh-alert-content").should('exist')
  })

})