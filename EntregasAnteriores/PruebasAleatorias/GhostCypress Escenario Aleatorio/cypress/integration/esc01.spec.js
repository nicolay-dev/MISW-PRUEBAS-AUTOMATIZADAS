const { faker } = require('@faker-js/faker');
const seed = Math.floor(Math.random()*200);
faker.seed(seed);

Cypress.on('uncaught:exception', (err) => {
  // we expect a 3rd party library error with message 'n.includes is not a function'
  // and don't want to fail the test so we return false
  if (err.message.includes('n.includes is not a function')) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})

const POM = require("../POM/POM")
const pollData01 = Cypress.env('poolData01');
const username = pollData01.username;
const password = pollData01.password;


const passwordConfirm1 = faker.internet.password();
const passwordConfirm2 = faker.internet.password();

describe('Change password', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
})
    
  it(`01_2-Login to ghost, change password and logout oráculo negativo old password válido, passwordnewconfirm diferente a password new seed  ${seed} `, function() {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    
    //Go to the staff owner page
    POM.elements.emailInput().should('not.exist') // check if the login form is not visible
    POM.goToStaff()
    cy.wait(1000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)
    
    //change password
    cy.get('#user-password-old').type(password)
    cy.get('#user-password-new').type(passwordConfirm1)
    cy.get('#user-new-password-verification').type(passwordConfirm2)
    cy.get('button span:contains("Change Password")').click()
    // Assert de que la app no debe dejar pasar campos vacíos 
    cy.get('button span:contains("Retry")').should('be.visible')
    cy.get('p:contains("Your new passwords do not match")').should('be.visible')
    cy.wait(1000)
     //Se coloca los datos que si permitan continuar la prueba hasta el final
    cy.get('#user-password-new').clear()
    cy.get('#user-password-new').type(passwordConfirm2)
    cy.get('button span:contains("Retry")').click()

    // Logout
    cy.wait(3000)
    
    cy.get('button[class="gh-notification-close"]').click()
    POM.signOut()
    
    //Login with the new password
    POM.signIn(username, passwordConfirm2);
    cy.wait(1000)
    
    cy.get(`span[class="gh-user-email"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${username}`)
    }) // check if we alreally are logged in

    //Go to the staff owner page and reset the password
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change password
    cy.get('#user-password-old').type(passwordConfirm2)
    cy.get('#user-password-new').type(password)
    cy.get('#user-new-password-verification').type(password)
    cy.get('button span:contains("Change Password")').click()
    
  })

  

})
