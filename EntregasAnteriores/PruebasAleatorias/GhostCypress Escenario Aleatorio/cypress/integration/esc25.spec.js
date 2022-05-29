const { faker } = require('@faker-js/faker');

// Declaring constants
const POM = require("../POM/POM");
const takeScreenshots = false;

let screenShotCount = 0;

describe('Create and delete post', () => {
  beforeEach(() => {
    goLogin();
  });

  it('Negativo, no se permite ingreso con usuario no valido', () => {
    const fakeData = {
      username: faker.internet.email(),
      password: faker.internet.password()
    }
    cy.get('input[name="identification"]').type(fakeData.username);
    cy.get('input[name="password"]').type(fakeData.password);
    cy.get('button[type="Submit"]').click();
    cy.get('p').contains("There is no user with that email address.").should('exist');
  });

  it('Negativo, no se permite ingreso con usuario valido pero contraseña invalida', () => {
    const fakeData = {
      username: "juanc@mail123.com",
      password: faker.internet.password()
    }
    cy.get('input[name="identification"]').type(fakeData.username);
    cy.get('input[name="password"]').type(fakeData.password);
    cy.get('button[type="Submit"]').click();
    cy.get('p').contains("Your password is incorrect.").should('exist');
  });
})

function goLogin() {
  cy.visit("/");
  cy.wait(3000);
  takeScreenshots ? POM.takeScreenShot('esc03', screenShotCount++): {};
}

Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
})