// Declaring constants
const POM = require("../POM/POM");
const takeScreenshots = false;

let screenShotCount = 0;


describe('Create and delete post', () => {
  beforeEach(() => {
    login();
  });
});

function login() {
  cy.visit("/");
  cy.wait(3000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  cy.get('form').within(() => { POM.signIn(Cypress.env('poolData01').genericUsername, Cypress.env('poolData01').genericPassword) });
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
  cy.wait(1000);
}
Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
})