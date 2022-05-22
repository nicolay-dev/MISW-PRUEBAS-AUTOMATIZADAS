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
    seudo:Cypress._.times(20, () => {
      return {
        'seed': `${seed}`,
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
        'string191': `${faker.datatype.string(191)}`,
        'string190': `${faker.datatype.string(190)}`,
        'string192': `${faker.datatype.string(192)}`,
        'alphanumeric191': `${faker.random.alphaNumeric(191)}`,
        'alphanumeric190': `${faker.random.alphaNumeric(190)}`,
        'alphanumeric192': `${faker.random.alphaNumeric(192)}`,
        'titlepost1000': `${faker.datatype.string(1000)}`,
        'titlepost1001': `${faker.datatype.string(1001)}`,
        'titlepost999': `${faker.datatype.string(999)}`,
        'password10': `${faker.internet.password(10)}`,
        'password11': `${faker.internet.password(11)}`,
        'password9': `${faker.internet.password(9)}`,
        'password6': `${faker.internet.password(6)}`,
        'alphanumeric1001': `${faker.random.alphaNumeric(1001)}`,
        'alphanumeric1000': `${faker.random.alphaNumeric(100)}`,
        'alphanumeric999': `${faker.random.alphaNumeric(999)}`,
        'slug191': `${faker.random.alphaNumeric(186)}-slug`,
        'slug190': `${faker.random.alphaNumeric(185)}-slug`,
        'slug192': `${faker.random.alphaNumeric(187)}-slug`,
        'email191': `${faker.random.alphaNumeric(180)}@correo.com`,
        'email192': `${faker.random.alphaNumeric(181)}@correo.com`,
        'email190': `${faker.random.alphaNumeric(179)}@correo.com`,
        'slug': `${faker.lorem.slug()}`,
        'emailspecial': `${faker.datatype.string(15)}@correo.com`,
            
      }
    })
  })
})