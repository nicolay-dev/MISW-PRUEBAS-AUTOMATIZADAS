class shortCut{

    elements = {

        emailInput: () => cy.get('input[name="identification"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        logInBtn: () => cy.get('button[type="Submit"]'),
        managePosts: () => cy.contains('Posts'),
        createPost: () => cy.get('a[title="New post"]'),
        managePages: () => cy.contains('Pages'),
        manageTags: () => cy.contains('Tags'),
        manageStaff: () => cy.contains('Staff'),
        settingsGeneral: () => cy.contains('General'),
        settingsDesign: () => cy.contains('Design'),
        myProfile: () => cy.get(`span[class="gh-user-email"]`),
        signOutBtn: () => cy.get(`a[href='#/signout/']`),
        createTag: () => cy.get('a span:contains("New tag")'),
        createPage: () => cy.get('a span:contains("New page")'),
        save: () => cy.contains('Save'),
        confirmDelete: () => cy.contains('Delete'),
        getPPT: (titulo) => cy.get("h3").contains(titulo),
        getPostPageinSite: (titulo) => cy.get("h2").contains(titulo),
        getTaginSite: (titulo) => cy.get("div").contains(titulo),
        getPostPageinTag: (titulo) => cy.get("h1").contains(titulo),
        publishPP: ()  => cy.get("span").contains("Publish"),
        viewPP: () => cy.get("a[class='post-view-link']")

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

    createNewTag(titulo){
        this.elements.createTag().click();
        cy.wait(2000);
        cy.get('input[name="name"]').type(titulo);
        cy.contains('Save').click();
    }

    buildNewPost(titulo, parrafo){
        this.elements.createPost().click();
        cy.get('textarea[placeholder="Post Title"]').type(titulo);
        cy.get('div[data-placeholder="Begin writing your post..."]').type(parrafo);

    }

    createNewPage(titulo, parrafo){
        this.elements.createPage().click();
        cy.wait(2000);
        cy.get('textarea[placeholder="Page Title"]').type(titulo)
        cy.wait(2000);
        cy.get("div[data-placeholder=\"Begin writing your page...\"]").type(parrafo)                  
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

    //Publish and Set it live now changes in whatever Post, Page, Tag
    publishChangesOnPP() {
        this.elements.publishPP().click();
        cy.wait(1000),
        cy.get('div').contains('Set it live now').click();
         cy.get('button').contains('Publish').click(); 
    }  
}

module.exports = new shortCut();