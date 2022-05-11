const url = Cypress.config('baseUrl') 
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Visit site login and create tag', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it('Login to ghost, create tag, validate tag creation', () => {  
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type(username)
            cy.get('input[id="ember10"]').type(password)
            cy.get('.login.gh-btn').click()
        })
        cy.wait(1000)
        //Create a tag
        cy.contains('Tags').click()
            cy.wait(1000)
            cy.get('.gh-btn.gh-btn-green').click()
            cy.wait(2000)
            // cy.contains('New Tag').click()
            // cy.wait(2000)
                cy.get('input[name="name"]').type("TAG Esc-5")
                cy.contains('Save').click()
            
            cy.wait(2000)
            //Go to the tag section and validate the tag is created
            cy.contains('Tags').click()
            cy.wait(1000)
            cy.get(`a[href="#/tags/tag-esc-5/"]`).should('contain', 'TAG Esc-5')
           
            cy.get(`a[href="#/tags/tag-esc-5/"]`).then(($tag)=>{
                expect($tag[0].innerText).to.equal('TAG Esc-5')
            }) // check if we create the tag
                 

        })
        after(function(){   
             //Go to the staff owner page
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

 