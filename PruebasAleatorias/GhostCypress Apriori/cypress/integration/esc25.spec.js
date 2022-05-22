const { faker } = require('@faker-js/faker');

// Declaring constants
const POM = require("../POM/POM");
const takeScreenshots = false;

let screenShotCount = 0;
let data = {};

describe('Create and delete post', () => {
  beforeEach(() => {
    // Get apriori data
    cy.fixture('apriori').then((apriori) => {
      data = apriori;
    });
    goLogin();
  });

  it('Negativo, no se permite ingreso de inyeción sql en usuario', () => {
    let mockData = {
      username: data.apriori[0].injection,
      password: '',
    }
    cy.get('input[name="identification"]').type(mockData.username);
    cy.get('input[name="identification"]').should('be.empty');
  });
  it('Negativo, no se permite ingreso de inyeción sql en contraseña', () => {
    let mockData = {
      username: '',
      password: data.apriori[0].injection,
    }
    cy.get('input[name="password"]').type(mockData.password);
    cy.get('input[name="password"]').should('be.empty');
  });

  it('Negativo, no se permite ingreso con usuario vacio', () => {
    let mockData = {
      username: '',
      password: 'password',
    }
    cy.get('input[name="password"]').type(mockData.password);
    cy.get('button[type="Submit"]').click();
    cy.get('p').contains("Please fill out the form to sign in.").should('exist');
  });

  it.only('Negativo, no se permite ingreso con contraseña vacia', () => {
    let mockData = {
      username: 'username',
      password: '',
    }
    cy.get('input[name="identification"]').type(mockData.username);
    cy.get('button[type="Submit"]').click();
    cy.get('p').contains("Please fill out the form to sign in.").should('exist');
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