const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
let count = 0;

describe('Change timezone', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.wait(4000)
        POM.takeScreenShot('esc13', count++);
    })
    it('Login to ghost, goto timezone, change timezone, validate timezone', () => {
        cy.get('form').within(() => {
            POM.signIn(username, password);
        })
        POM.takeScreenShot('esc13', count++);
        cy.wait(1000)
        //Create a tag
        POM.elements.settingsGeneral().click()
        cy.wait(1000)
        POM.takeScreenShot('esc13', count++);
        cy.xpath("(//span[contains(text(),'Expand')])[2]").click()   
        cy.wait(1000)
        POM.takeScreenShot('esc13', count++);
        cy.get("#timezone").select("Asia/Tokyo")
        cy.wait(1000)
        POM.takeScreenShot('esc13', count++);
        cy.contains('Save settings'),
        cy.get('#timezone').find('option:selected').should('have.text', `\n    (GMT +9:00) Osaka, Sapporo, Tokyo\n`);
        POM.takeScreenShot('esc13', count++);
         // check if we create the tag

    })

})

