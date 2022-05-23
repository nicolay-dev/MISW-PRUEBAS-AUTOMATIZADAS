

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');
const takeScreenshots = false;


const username = pollData01.genericUsername;
const password = pollData01.genericPassword;
const titulo = pollData01.POST07;
const parrafo = pollData01.PARRAFO;
const urlLector = pollData01.URLLECTOR;
let count = 0;

describe('Schedule a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
      takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  })
  it('Create post and delete it', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
        takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
    })
    cy.wait(1000);
    //Build a new post
    POM.buildNewPost(titulo, parrafo);
    cy.wait(1000);
    takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
    cy.get('span').contains('Publish').click();
    cy.wait(1000);
    takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
    cy.get('div').contains('Schedule it for later').click();
    cy.wait(1000);
    takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
    cy.get('span').contains('Schedule').click();
    cy.wait(301000);
    POM.goToPosts();
    takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
    // check if Post7 was create
    cy.get('a[title="Edit this post"]').then(($tag) => {
      expect($tag[1].innerText).to.includes(titulo);
    }) 
    takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};

  })

})
