class shortCut{

    elements = {

        emailInput: () => cy.get('input[name="identification"]'),
        passwordInput: () => cy.get('input[name="password"]'),
        logInBtn: () => cy.get('button[type="Submit"]'),
        managePosts: () => cy.contains('Posts'),
        createPost: () => cy.get('a[title="New post"]'),
        managePages: () => cy.contains('Pages'),
        manageTags: () => cy.contains('Tags'),
        createTag: () => cy.get('a span:contains("New tag")'),
        createPage: () => cy.get('a span:contains("New page")'),
        save: () => cy.contains('Save'),
        confirmDelete: () => cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]'),
        getPPT: (titulo) => cy.get("h3").contains(titulo),
        getPostPageinSite: (titulo) => cy.get('h2').contains(titulo),
        menuPublishUpdatePP: ()  => cy.get('div[class="gh-publishmenu ember-view"]'),
        btnPublishUpdatePP: () => cy.get('button[class="gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view"]'),
        cfrmPublishUpdatePP: () => cy.get('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]'),
        settingsBtnPP: () => cy.get('button[title="Settings"]'),
        viewPP: () => cy.get("a[class='post-view-link']"),
        sectionView: () => cy.get('a[class="ember-view gh-editor-back-button"]'),
        viewSite: () => cy.get('a[title="Open site in new tab"]').invoke('removeAttr', 'target'),  

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

    createNewTag(titulo){
        this.elements.createTag().click();
        cy.wait(2000);
        cy.get('input[name="name"]').type(titulo);
        this.elements.save().click();
    }

    buildNewPost(titulo, parrafo){
        this.elements.createPost().click();
        cy.get('textarea[placeholder="Post title"]').type(titulo);
        cy.get('div[data-placeholder="Begin writing your post..."]').type(parrafo);

    }

    //Once you are inside a post, it changes the title
    editTitlePost(titulo){
        cy.get('textarea[placeholder="Post title"]').clear();
        cy.get('textarea[placeholder="Post title"]').type(titulo);

    }

    createNewPage(titulo, parrafo){
        this.elements.createPage().click();
        cy.wait(2000);
        cy.get('textarea[placeholder="Page title"]').type(titulo)
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

    takeScreenShot(filename, count) {
        cy.screenshot(`${filename} - ${count}`);
    }

    deleteButtonClick() {
        cy.get('span').contains('Delete').click();

    }
}

module.exports = new shortCut();