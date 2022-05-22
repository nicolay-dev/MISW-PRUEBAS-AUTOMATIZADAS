
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

describe('Change email in profile', () => {
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
  it(`22_3-Login to ghost, go to profile, change email, validate, oráculo Negativo, cambiar por un email de 192 caracteres con sample ${sample}`, function() {
    cy.log('seed', this.data.seudo[sample].seed)
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
    
    //change email
    cy.get('#user-email').clear()
    cy.get('#user-email').type(this.data.seudo[sample].email192, { force: true })
    
    POM.elements.save().click()
    cy.wait(1000)
    cy.get('p:contains("Please supply a valid email address")').should('be.visible')
    cy.wait(1000)
    //Colocar datos válidos para continuar la prueba
    cy.get('#user-email').clear({ force: true })
    cy.get('#user-email').type(this.data.seudo[sample].email, { force: true })
    cy.get('button span:contains("Retry")').click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)
    // Verificar cambio de email
    cy.get(`span[class="gh-user-email"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.seudo[sample].email}`)
    }) // check if the email is changed
  

    //Go to the staff owner page and reset the email
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-email').clear()
    cy.get('#user-email').type(username, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })
  it(`22_4-Login to ghost, go to profile, change email, validate, oráculo Positivo, cambiar por un email de 191 caracteres con sample ${sample} `, function() {
    cy.log('seed', this.data.seudo[sample].seed)
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
    
    //change email
    cy.get('#user-email').clear()
    cy.get('#user-email').type(this.data.seudo[sample].email191, { force: true })
    
    POM.elements.save().click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)
    // Verificar cambio de email
    cy.get(`span[class="gh-user-email"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.seudo[sample].email191}`)
    }) // check if the email is changed
  

    //Go to the staff owner page and reset the email
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-email').clear({ force: true })
    cy.get('#user-email').type(username, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })
  it(`22_5-Login to ghost, go to profile, change email, validate, oráculo Positivo, cambiar por un email de 190 caracteres con sample ${sample} `, function() {
    cy.log('seed', this.data.seudo[sample].seed)
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
    
    //change email
    cy.get('#user-email').clear()
    cy.get('#user-email').type(this.data.seudo[sample].email190, { force: true })
    
    POM.elements.save().click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)
    // Verificar cambio de email
    cy.get(`span[class="gh-user-email"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.seudo[sample].email190}`)
    }) // check if the email is changed
  

    //Go to the staff owner page and reset the email
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-email').clear({ force: true })
    cy.get('#user-email').type(username, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })

  it(`22_6-Login to ghost, go to profile, change email, validate, oráculo Negativo, cambiar por un email de con caracteres especiales no válido sample ${sample}`, function() {
    cy.log('seed', this.data.seudo[sample].seed)
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    cy.wait(1000)
    
    //Go to the staff owner page
    POM.elements.emailInput().should('not.exist') // check if the login form is not visible
    POM.goToStaff()
    cy.wait(3000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)
    
    //change email
    cy.get('#user-email').clear()
    cy.get('#user-email').type(this.data.seudo[sample].emailspecial, { force: true })
    
    POM.elements.save().click()
    cy.get('p:contains("Please supply a valid email address")').should('be.visible')
    cy.wait(1000)
    //Colocar datos válidos para continuar la prueba
    cy.get('#user-email').clear({ force: true })
    cy.get('#user-email').type(this.data.seudo[sample].email, { force: true })
    cy.get('button span:contains("Retry")').click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(3000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)
    // Verificar cambio de email
    cy.get(`span[class="gh-user-email"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.seudo[sample].email}`)
    }) // check if the email is changed
  

    //Go to the staff owner page and reset the email
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(3000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-email').clear()
    cy.get('#user-email').type(username, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })
})
