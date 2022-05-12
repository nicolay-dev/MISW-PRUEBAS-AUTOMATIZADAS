class shortCut{

    elements = {

        emailInput: () => cy.get('input[name="identification"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        logInBtn: () => cy.get('button[type="Submit"]'),
        managePosts: () => cy.contains('Posts'),
        createPost: () => cy.contains('a[title="New post"]'),
        managePages: () => cy.contains('Pages'),
        manageTags: () => cy.contains('Tags'),
        manageStaff: () => cy.contains('Staff'),
        settingsGeneral: () => cy.contains('General'),
        settingsDesign: () => cy.contains('Design'),
        myProfile: () => cy.get(`span[class="gh-user-email"]`),
        signOutBtn: () => cy.get(`a[href='#/signout/']`),
        createTag: () => cy.get('a span:contains("New tag")')

    }

    signIn(email, password){
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.logInBtn().click();
    }

    goToPosts(){
        this.elements.managePosts().click();
    }

    createNewPost(){
        this.elements.createPost().click();
    }

    goToPages(){
        this.elements.managePages().click();
    }

    goToTags(){
        this.elements.manageTags().click();
    }

    goToStaff(){
        this.elements.manageStaff().click();
    }

    signOut(){
        this.elements.myProfile().click();
        cy.wait(3000);
        this.elements.signOutBtn().click();
        cy.wait(1500);
        this.elements.logInBtn().should('exist'); // check if the login form is visible
        cy.wait(1000);
    }

    getPPT(titulo){
        cy.get("h3").contains(titulo);
    }

    createNewTag(titulo){
        this.elements.createTag().click();
        cy.wait(2000);
        cy.get('input[name="name"]').type(titulo);
        cy.contains('Save').click();
    }

    createNewPost(titulo, parrafo){

    }

    createNewPage(titulo, parrafo){

    }

    //Click on the settings button in whatever Posts or Pages view
    clickUpdateButtonOnPP() {
        cy.contains('Update').click();
    }

    //Update - Publish changes in whatever Post, Page, Tag
    updateChangesOnPP() {
        this.clickUpdateButtonOnPP();
        cy.get('Button').contains('Update').click();
    }

    //Click on the settings button in whatever Post, Page, Tag
    clickSettingsOnPP() {
        cy.get('button[title="Settings"]').click();
    }
}

module.exports = new shortCut();