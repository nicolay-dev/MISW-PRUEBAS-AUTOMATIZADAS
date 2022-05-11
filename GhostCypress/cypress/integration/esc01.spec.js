
Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('n.includes is not a function')) {
      return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  })

const url = Cypress.config('baseUrl') 
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Visit site login', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it('Login to ghost, change password and logout', () => {  
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type(username)
            cy.get('input[id="ember10"]').type(password)
            cy.get('.login.gh-btn').click()
        })
        cy.wait(1000)
        //Go to the staff owner page
            cy.get('#ember8').should('not.exist') // check if the login form is not visible
            cy.contains('Staff').click()
            cy.wait(1000)
            cy.get('.gh-badge.owner').click()
            cy.wait(1000)
       //change password
            cy.get('input[id="user-password-old"]').type(password)
            cy.get('input[id="user-password-new"]').type(Cypress.env('password2'))
            cy.get('input[id="user-new-password-verification"]').type(Cypress.env('password2'))
            cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"] span').click()
        
       // Logout
         cy.wait(3000)
            cy.get('button[class="gh-notification-close"]').click()
            cy.wait(2000)
         cy.get(`span[class="gh-user-email"]`).click()
            cy.wait(3000)
            cy.get( `a[href='#/signout/']`).click()
            cy.wait(1000)
            cy.get('#ember8').should('exist') // check if the login form is visible
            cy.wait(1000)
            //Login with the new password
            cy.get('#ember8').type(username)
            cy.get('#ember10').type(Cypress.env('password2'))
            cy.get('.login.gh-btn').click()
            cy.wait(1000)
            cy.get(`span[class="gh-user-email"]`).then(($user)=>{
                expect($user[0].innerText).to.equal(`${username}`)
            }) // check if we alreally are logged in

             //Go to the staff owner page and reset the password
             cy.wait(1000)
             cy.contains('Staff').click()
             cy.wait(2000)
             cy.get('.gh-badge.owner').click()
             cy.wait(2000)
        //change password
             cy.get('input[id="user-password-old"]').type(Cypress.env('password2'))
             cy.get('input[id="user-password-new"]').type(password)
             cy.get('input[id="user-new-password-verification"]').type(password)
             cy.get('button[class="gh-btn gh-btn-icon button-change-password gh-btn-red ember-view"] span').click()
                     


    })

})