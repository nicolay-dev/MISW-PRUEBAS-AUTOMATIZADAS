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
        getPostPageinSite: (titulo) => cy.get('h2').contains(titulo),
        getTaginSite: (titulo) => cy.get("div").contains(titulo),
        getPostPageinTag: (titulo) => cy.get("h1").contains(titulo),
        menuPublishUpdatePP: ()  => cy.get('div[class="gh-publishmenu ember-view"]'),
        btnPublishUpdatePP: () => cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]'),
        settingsBtnPP: () => cy.get('button[title="Settings"]'),
        sectionView: () => cy.get('a[class="blue link fw4 flex items-center ember-view"]'),
        viewSite: () => cy.get('a[title="Open site in new tab"]'),
        

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

    //Once you are inside a post, it changes the title
    editTitlePost(titulo){
        cy.get('textarea[placeholder="Post Title"]').clear();
        cy.get('textarea[placeholder="Post Title"]').type(titulo);

    }

    createNewPage(titulo, parrafo){
        this.elements.createPage().click();
        cy.wait(2000);
        cy.get('textarea[placeholder="Page Title"]').type(titulo)
        cy.wait(2000);
        cy.get("div[data-placeholder=\"Begin writing your page...\"]").type(parrafo)                  
    }

    //Click on the settings button in whatever Post-Page
    clickSettingsOnPP() {
        this.elements.settingsBtnPP().click();
    }

    //Publish new or update any changes in whatever Post-Page
    publishUpdatePP() {
        this.elements.menuPublishUpdatePP().click();
        this.elements.btnPublishUpdatePP().click(); 
    }  

    //If you are in edit Post/Page view, it will return to section view
    returnToSectionView(){
        this.elements.sectionView().click();
    }

    //If you are in the main page, it will click on the button that opens a new tab with the reader site version of Ghost
    viewReaderSite(){
        this.elements.viewSite().click();
    }

    //If you are inside settings in a Post/Page it closes the settings view
    closeSettings(){
        cy.get('button[aria-label="Close"]').click()
    }
}

module.exports = new shortCut();