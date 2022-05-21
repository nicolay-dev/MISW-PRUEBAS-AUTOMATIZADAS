// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('generateFixture', () => {
    const { faker } = require('@faker-js/faker');
    const seed = Math.floor(Math.random()*200);
    faker.seed(seed);
  
    cy.writeFile('cypress/fixtures/seudoDinamico.json', {
      seudo:Cypress._.times(5, () => {
        return {
 
            'title': `${faker.lorem.words(3)}`,
            'content': `${faker.lorem.paragraphs(3)}`,
            'titleEdit': `${faker.lorem.sentence()}`,
            'name': `${faker.name.firstName()}`,
            'lastName': `${faker.name.lastName()}`,
            'email': `${faker.internet.email()}`,
            'password': `${faker.internet.password()}`,
            'passwordConfirm': `${faker.internet.password()}`,
            'username': `${faker.internet.userName()}`,
            'random': `${faker.datatype.string()}`,
            'url':`${faker.internet.url()}`,
            'author':`${faker.name.firstName()} ${faker.name.lastName()}`,
            'tagName191': `${faker.lorem.words(191)}`,
            'tagName190': `${faker.lorem.words(190)}`,
            'tagName192': `${faker.lorem.words(192)}`,
            'titlepost1000': `${faker.lorem.words(1000)}`,
            'titlepost1001': `${faker.lorem.words(1001)}`,
            'titlepost999': `${faker.lorem.words(999)}`,
            'name191': `${faker.lorem.words(191)}`,
            'name190': `${faker.lorem.words(190)}`,
            'name192': `${faker.lorem.words(192)}`,
            'password60': `${faker.internet.password(60)}`,
            'password61': `${faker.internet.password(61)}`,
            'password59': `${faker.internet.password(59)}`,
            'nameVoid': "",
            'passwordVoid': "",
            'passwordConfirmVoid': "",
            'emailvoid': "",
            'email': `${faker.internet.email()}`,
            
        }
      })
    })
  })