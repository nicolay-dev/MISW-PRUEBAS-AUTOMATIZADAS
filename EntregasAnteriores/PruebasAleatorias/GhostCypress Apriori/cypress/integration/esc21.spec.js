
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
const url = pollData01.URLLECTOR;
const username = pollData01.username;
const password = pollData01.password;
const nombre = pollData01.NAME; 




describe('Change name and slug', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    cy.fixture('apriori').then(function (data) {
      this.data = data
  })
})
    
  it('21-Login to ghost, go to profile, change user name and slug, validate', function() {
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
    
    //change username and slug
    cy.get('#user-name').clear()
    cy.get('#user-name').type(this.data.apriori[0].username, { force: true })
    cy.get('#user-slug').clear()
    cy.get('#user-slug').type(this.data.apriori[0].slug, { force: true })
    POM.elements.save().click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)

    cy.get(`span[class="gh-user-name mb1"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.apriori[0].username}`)
    }) // check id the username is changed
    cy.xpath(`//p[normalize-space()='${url}author/${this.data.apriori[0].slug}']`).should('exist') // check if the slug is changed

    //Go to the staff owner page and reset the password
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-name').clear()
    cy.get('#user-name').type(nombre, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })

  it('21_02-Login to ghost, go to profile, change user name 192 chrt and slug válido, validate oráculo negativo ', function() {
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
    
    //change username and slug
    cy.get('#user-name').clear()
    cy.get('#user-name').type(this.data.apriori[0].alphanumeric192, { force: true })
    cy.get('#user-slug').clear()
    cy.get('#user-slug').type(this.data.apriori[0].slug, { force: true })
    POM.elements.save().click()
    // error generado cuando se pone nombre muy largo
    cy.get('button span:contains("Retry")').should('be.visible')
    
    // Arreglar los datos para que pse la prueba de nombre muy largo
    cy.get('#user-name').clear()
    cy.get('#user-name').type(this.data.apriori[0].username, { force: true })
    cy.contains('Retry').click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)

    cy.get(`span[class="gh-user-name mb1"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.apriori[0].username}`)
    }) // check id the username is changed
    cy.xpath(`//p[normalize-space()='${url}author/${this.data.apriori[0].slug}']`).should('exist') // check if the slug is changed

    //Go to the staff owner page and reset the password
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-name').clear()
    cy.get('#user-name').type(nombre, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })

  it('21_3-Login to ghost, go to profile, change user name de 191 characters and slug, validate, oráculo positivo', function() {
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
    
    //change username and slug
    cy.get('#user-name').clear()
    cy.get('#user-name').type(this.data.apriori[1].alphanumeric191, { force: true })
    cy.get('#user-slug').clear()
    cy.get('#user-slug').type(this.data.apriori[1].slug, { force: true })
    POM.elements.save().click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)

    cy.get(`span[class="gh-user-name mb1"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.apriori[1].alphanumeric191}`)
    }) // check id the username is changed
    cy.xpath(`//p[normalize-space()='${url}author/${this.data.apriori[1].slug}']`).should('exist') // check if the slug is changed

    //Go to the staff owner page and reset the password
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-name').clear()
    cy.get('#user-name').type(nombre, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })

  it('21_4-Login to ghost, go to profile, change user name de 190 characters and slug, validate, oráculo positivo', function() {
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
    
    //change username and slug
    cy.get('#user-name').clear()
    cy.get('#user-name').type(this.data.apriori[1].alphanumeric190, { force: true })
    cy.get('#user-slug').clear()
    cy.get('#user-slug').type(this.data.apriori[1].slug, { force: true })
    POM.elements.save().click()
    cy.wait(1000)
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
    //Go back to profile
    cy.get('.gh-badge.owner').click()
    cy.wait(1000)

    cy.get(`span[class="gh-user-name mb1"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.apriori[1].alphanumeric190}`)
    }) // check id the username is changed
    cy.xpath(`//p[normalize-space()='${url}author/${this.data.apriori[1].slug}']`).should('exist') // check if the slug is changed

    //Go to the staff owner page and reset the password
    cy.wait(1000)
    
    POM.goToStaff()
    cy.wait(2000)
    
    cy.get('.gh-badge.owner').click()
    cy.wait(2000)
    //change username back for future tests
    cy.get('#user-name').clear()
    cy.get('#user-name').type(nombre, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
  })

  it('21_5-Login to ghost, go to profile, nombre y slug vacíos, validate, oráculo negativo', function() {
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
    
    //change username and slug se comenta el tipeo porque es vacío
    cy.get('#user-name').clear()
    // cy.get('#user-name').type(this.data.apriori[0].alphanumeric192, { force: true })
    cy.get('#user-slug').clear()
    // cy.get('#user-slug').type(this.data.apriori[0].slug, { force: true })
    POM.elements.save().click()
    // error generado cuando no se pone nada en nombre
    cy.get('button span:contains("Retry")').should('be.visible')
  
    cy.wait(1000)
    // Arreglar los datos para que pase la prueba
    cy.get('#user-name').clear({ force: true })
    cy.get('#user-name').type(this.data.apriori[3].username, { force: true })
    cy.get('#user-slug').clear({ force: true })
    cy.get('#user-slug').type(this.data.apriori[3].slug, { force: true })
    cy.wait(1000)
    cy.contains('Retry').click()
    cy.wait(1500)
    POM.elements.save().click()
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
       //Go back to profile
       cy.get('.gh-badge.owner').click()
       cy.wait(2000)

    cy.get(`span[class="gh-user-name mb1"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.apriori[3].username}`)
    }) // check id the username is changed
    cy.xpath(`//p[normalize-space()='${url}author/${this.data.apriori[3].slug}']`).should('exist') // check if the slug is changed

    cy.wait(1000)
    //change username back for future tests
    cy.get('#user-name').clear()
    cy.get('#user-name').type(nombre, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
    
  })

  it('21_6-Login to ghost, go to profile, nombre vacíos, slug válido, validate, oráculo negativo', function() {
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
    
    //change username and slug se comenta el tipeo porque es vacío
    cy.get('#user-name').clear()
    // cy.get('#user-name').type(this.data.apriori[0].alphanumeric192, { force: true })
    cy.get('#user-slug').clear()
    cy.get('#user-slug').type(this.data.apriori[3].slug, { force: true })
    POM.elements.save().click()
    // error generado cuando no se pone nada en nombre
    cy.get('button span:contains("Retry")').should('be.visible')
  
    cy.wait(1000)
    // Arreglar los datos para que pase la prueba
    cy.get('#user-name').clear({ force: true })
    cy.get('#user-name').type(this.data.apriori[3].username, { force: true })
    cy.wait(1000)
    cy.contains('Retry').click()
    cy.wait(1500)
    POM.elements.save().click()
    POM.goToPosts()
    cy.wait(1000)
    POM.goToStaff()
    cy.wait(1000)
       //Go back to profile
       cy.get('.gh-badge.owner').click()
       cy.wait(2000)

    cy.get(`span[class="gh-user-name mb1"]`).then(($user) => {
      expect($user[0].innerText).to.equal(`${this.data.apriori[3].username}`)
    }) // check id the username is changed
    cy.xpath(`//p[normalize-space()='${url}author/${this.data.apriori[3].slug}']`).should('exist') // check if the slug is changed

    cy.wait(1000)
    //change username back for future tests
    cy.get('#user-name').clear()
    cy.get('#user-name').type(nombre, { force: true })
    cy.wait(1000)
    POM.elements.save().click()
    
    
  })

})
