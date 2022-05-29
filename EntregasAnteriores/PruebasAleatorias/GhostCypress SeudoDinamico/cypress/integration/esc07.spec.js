

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST07;
const parrafo = pollData01.PARRAFO;
const urlLector = pollData01.URLLECTOR;
let count = 0;

describe('Schedule a post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    POM.takeScreenShot('esc07', count++);
  })
  it('Create post and delete it', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
      POM.takeScreenShot('esc07', count++);
    })
    cy.wait(1000);
    //Build a new post
    POM.buildNewPost(titulo, parrafo);
    cy.wait(1000);
    POM.takeScreenShot('esc07', count++);
    cy.get('span').contains('Publish').click();
    cy.wait(1000);
    POM.takeScreenShot('esc07', count++);
    cy.get('div').contains('Schedule it for later').click();
    cy.wait(1000);
    POM.takeScreenShot('esc07', count++);
    cy.get('span').contains('Schedule').click();
    cy.wait(301000);
    POM.goToPosts();
    POM.takeScreenShot('esc07', count++);
    // check if Post7 was create
    cy.get('a[title="Edit this post"]').then(($tag) => {
      expect($tag[1].innerText).to.includes(titulo);
    }) 
    POM.takeScreenShot('esc07', count++);

  })

  // const file_name = 'esc07';
  // let screenshot_count=0;

  // function takeScreenShot() {
  //   cy.screenshot(`${this.file_name + this.screenshot_count++}`);
  // }

})
