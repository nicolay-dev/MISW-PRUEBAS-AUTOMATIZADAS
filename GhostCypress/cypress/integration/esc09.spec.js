const url = Cypress.config('baseUrl') 
const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Visit site login and create tag', () => {
    beforeEach(()=>{
       cy.visit("/")
        cy.wait(4000)
    })
       it('Login to ghost, create page, publish page, edit title of page, validate visit to page', () => {  
        cy.get('form').within(() => {
            cy.get('input[id="ember8"]').type(username)
            cy.get('input[id="ember10"]').type(password)
            cy.get('.login.gh-btn').click()
        })
        cy.wait(1000)
        //Create a page
        cy.contains('Pages').click()
            cy.wait(1000)
            cy.get('a[href="#/pages/"]').click()
            cy.wait(2000)
            // cy.contains('New Tag').click()
            // cy.wait(2000)
                cy.get('textarea[placeholder="Post Title"]').type(Cypress.env('PAGE09'))
                cy.get("div[data-placeholder=\"Begin writing your page...\"]").type(Cypress.env('PARRAFO'))
                cy.get('.gh-publishmenu.ember-view').click()
                cy.wait(1000)
                cy.get('.gh-publishmenu-item.gh-publishmenu-item-publish').click()
            
            cy.wait(2000)
            //Go to the tag section and validate the tag is created
            cy.contains('Tags').click()
            cy.wait(1000)
            cy.get(`a[href="#/tags/tag-esc-5/"]`).should('contain', 'TAG Esc-5')
           
            cy.get(`a[href="#/tags/tag-esc-5/"]`).then(($tag)=>{
                expect($tag[0].innerText).to.equal('TAG Esc-5')
            }) // check if we create the tag
                 

        })
       
    })

 