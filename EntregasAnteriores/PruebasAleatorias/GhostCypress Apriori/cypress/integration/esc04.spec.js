Cypress.on('uncaught:exception', (err) => {
  // we expect a 3rd party library error with message 'Cannot read properties of null (reading 'querySelector')'
  // and don't want to fail the test so we return false
  if (err.message.includes("Cannot read properties of null (reading 'querySelector')")) {
    return false
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
})

const POM = require("../POM/POM")
const url = Cypress.config('baseUrl')
const pollData01 = Cypress.env('poolData01');

const username = pollData01.username;
const password = pollData01.password;
const titulo = pollData01.POST04;
const titulo2 = pollData01.POST04_1;
const parrafo = pollData01.PARRAFO;
const youtubelink = pollData01.YOUTUBELINK; 
const vimeolink = pollData01.VIMEOLINK; 
const souncloudlink = pollData01.SOUNDCLOUD; 

describe('Create and edit post', () => {
  beforeEach(() => {
    cy.visit("/")
    cy.wait(4000)
    
  })
  it('Login to ghost, create title, create content, publish and edit title.', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    
    cy.wait(2000)
    //Build a new post
    
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    
    POM.publishUpdatePP()
    cy.wait(4000)
    
    //Back to return view
    POM.returnToSectionView()
    cy.wait(2000);
    
    //Go to viewer site and confirm the post is published
    POM.viewReaderSite();
    cy.wait(2000)
    
    POM.elements.getPostPageinSite(titulo).click()
    cy.wait(3000)
    
    //Return to edit post
    cy.visit(url)
    cy.wait(2000)
    
    POM.goToPosts();
    
    POM.elements.getPPT(titulo).click()
    cy.wait(1000);
    
    //Change title
    POM.editTitlePost(titulo2);
    cy.wait(2000);
    
    //Drop content 1
    cy.get('p[data-koenig-dnd-droppable="true"]').clear();
    cy.wait(3000);

    
    //Change content for embed YouTube URL 
    cy.get('div[data-placeholder="Begin writing your post..."]').type('{enter}');
    cy.get('button[aria-label="Add a card"]').click();
    cy.get('div').contains('YouTube').click();
    cy.get('input[name="url"]').type(youtubelink);
    cy.get('input[name="url"]').type('{enter}');
    cy.wait(3000);


    //Publish post
    POM.publishUpdatePP()
    
    //Verify edited post
    POM.returnToSectionView()
    cy.wait(2000);
    
    POM.viewReaderSite();
    cy.wait(2000)
    
    POM.elements.getPostPageinSite(titulo2).click()
    cy.wait(3000)


  })
  it('Login to ghost, create title, create content, publish and edit title.', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    
    cy.wait(2000)
    //Build a new post
    
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    
    POM.publishUpdatePP()
    cy.wait(4000)
    
    //Back to return view
    POM.returnToSectionView()
    cy.wait(2000);
    
    //Go to viewer site and confirm the post is published
    POM.viewReaderSite();
    cy.wait(2000)
    
    POM.elements.getPostPageinSite(titulo).click()
    cy.wait(3000)
    
    //Return to edit post
    cy.visit(url)
    cy.wait(2000)
    
    POM.goToPosts();
    
    POM.elements.getPPT(titulo).click()
    cy.wait(1000);
    
    //Change title
    POM.editTitlePost(titulo2);
    cy.wait(2000);
    
    //Drop content 1
    cy.get('p[data-koenig-dnd-droppable="true"]').clear();
    cy.wait(3000);

    
    //Change content for embed YouTube URL 
    cy.get('div[data-placeholder="Begin writing your post..."]').type('{enter}');
    cy.get('button[aria-label="Add a card"]').click();
    cy.get('div').contains('Vimeo').click();
    cy.get('input[name="url"]').type(vimeolink);
    cy.get('input[name="url"]').type('{enter}');
    cy.wait(3000);


    //Publish post
    POM.publishUpdatePP()
    
    //Verify edited post
    POM.returnToSectionView()
    cy.wait(2000);
    
    POM.viewReaderSite();
    cy.wait(2000)
    
    POM.elements.getPostPageinSite(titulo2).click()
    cy.wait(3000)

   
  })

  it('Login to ghost, create title, create content, publish and edit title.', () => {
    cy.get('form').within(() => {
      POM.signIn(username, password);
    })
    
    cy.wait(2000)
    //Build a new post
    
    POM.buildNewPost(titulo, parrafo)
    cy.wait(1000)
    
    POM.publishUpdatePP()
    cy.wait(4000)
    
    //Back to return view
    POM.returnToSectionView()
    cy.wait(2000);
    
    //Go to viewer site and confirm the post is published
    POM.viewReaderSite();
    cy.wait(2000)
    
    POM.elements.getPostPageinSite(titulo).click()
    cy.wait(3000)
    
    //Return to edit post
    cy.visit(url)
    cy.wait(2000)
    
    POM.goToPosts();
    
    POM.elements.getPPT(titulo).click()
    cy.wait(1000);
    
    //Change title
    POM.editTitlePost(titulo2);
    cy.wait(2000);
    
    //Drop content 1
    cy.get('p[data-koenig-dnd-droppable="true"]').clear();
    cy.wait(3000);

    
    //Change content for embed YouTube URL 
    cy.get('div[data-placeholder="Begin writing your post..."]').type('{enter}');
    cy.get('button[aria-label="Add a card"]').click();
    cy.get('div').contains('SoundCloud').click();
    cy.get('input[name="url"]').type(souncloudlink);
    cy.wait(3000);
    cy.get('input[name="url"]').type('{enter}');
    cy.wait(3000);


    //Publish post
    POM.publishUpdatePP()
    
    //Verify edited post
    POM.returnToSectionView()
    cy.wait(2000);
    
    POM.viewReaderSite();
    cy.wait(2000)
    
    POM.elements.getPostPageinSite(titulo2).click()
    cy.wait(3000)

    
  })

})