
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

// tomo un dato del pool de datos de 20 que tengo disponible. 
  let sample = Math.floor(Math.random()*19);




describe('Change password', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    //Generara datos seudodinamicos
    cy.generateFixture().then(()=>{
      cy.fixture('seudoDinamico').then(function (data) {
              this.data = data
          })
      })
})
    

  it('01_6-Login to ghost, change password and logout oráculo negativo password old bien, new password con contraseña 9 caracteres', function() {
    cy.log ('seed', this.data.seudo[sample].seed)
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
    // Se coloca una contraseña de caracteres iguales a 9
    cy.get('#user-password-new').type(this.data.seudo[sample].password9)
    cy.get('#user-new-password-verification').type(this.data.seudo[sample].password9)
    cy.get('button span:contains("Change Password")').click()
    cy.wait(1000)
    // Assert de que la app no debe dejar pasar campos vacíos 
    cy.get('button span:contains("Retry")').should('be.visible')
    cy.get('p:contains("Password must be at least 10 characters long")').should('be.visible')
    cy.wait(1000)
    //Se coloca los datos que si permitan continuar la prueba hasta el final
    cy.get('#user-password-new').clear()
    cy.get('#user-new-password-verification').clear()
    cy.get('#user-password-new').type(this.data.seudo[sample].passwordConfirm)
    cy.get('#user-new-password-verification').type(this.data.seudo[sample].passwordConfirm)
    cy.get('button span:contains("Retry")').click()

    // Logout
    cy.wait(3000)
    
    cy.get('button[class="gh-notification-close"]').click()
    POM.signOut()
    
    //Login with the new password
    POM.signIn(username, this.data.seudo[sample].passwordConfirm);
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
    //change password to original state
    cy.get('#user-password-old').type(this.data.seudo[sample].passwordConfirm)
    cy.get('#user-password-new').type(password)
    cy.get('#user-new-password-verification').type(password)
    cy.get('button span:contains("Change Password")').click()
    
  })

  it('01_7-Login to ghost, change password and logout oráculo positivo password old bien, new password con contraseña 10 caracteres', function() {
    cy.log ('seed', this.data.seudo[sample].seed)
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
    // Se coloca una contraseña de caracteres iguales a 9
    cy.get('#user-password-new').type(this.data.seudo[sample].password10)
    cy.get('#user-new-password-verification').type(this.data.seudo[sample].password10)
    cy.get('button span:contains("Change Password")').click()
    cy.wait(1000)
    // La app debe continuar con normalidad
       // Logout
    cy.wait(3000)
    
    cy.get('button[class="gh-notification-close"]').click()
    POM.signOut()
    
    //Login with the new password
    POM.signIn(username, this.data.seudo[sample].password10);
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
    //change password to original state
    cy.get('#user-password-old').type(this.data.seudo[sample].password10)
    cy.get('#user-password-new').type(password)
    cy.get('#user-new-password-verification').type(password)
    cy.get('button span:contains("Change Password")').click()
    
  })

  it('01_8-Login to ghost, change password and logout oráculo positivo password old bien, new password con contraseña 11 caracteres', function() {
    cy.log ('seed', this.data.seudo[sample].seed)
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
    // Se coloca una contraseña de caracteres iguales a 9
    cy.get('#user-password-new').type(this.data.seudo[sample].password11)
    cy.get('#user-new-password-verification').type(this.data.seudo[sample].password11)
    cy.get('button span:contains("Change Password")').click()
    cy.wait(1000)
    // La app debe continuar con normalidad
       // Logout
    cy.wait(3000)
    
    cy.get('button[class="gh-notification-close"]').click()
    POM.signOut()
    
    //Login with the new password
    POM.signIn(username, this.data.seudo[sample].password11);
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
    //change password to original state
    cy.get('#user-password-old').type(this.data.seudo[sample].password11)
    cy.get('#user-password-new').type(password)
    cy.get('#user-new-password-verification').type(password)
    cy.get('button span:contains("Change Password")').click()
    
  })
})
