const { Given, When, Then } = require('@cucumber/cucumber');
When('I enter email {kraken-string}', async function (email) {

    let element = await this.driver.$('#ember8');

    return await element.setValue(email);

});
When('I enter password {kraken-string}', async function (password) {

    let element = await this.driver.$('#ember10');

    return await element.setValue(password);

});
When('I click Sign in', async function() {

    let element = await this.driver.$('#ember12');

    return await element.click();

})
Then('I create a new post with nav bar', async function () {

    let element = await this.driver.$("a[title=\"New post\"]");

    return await element.click();

});
Then('I click on the redact title inputbox', async function () {

    let element = await this.driver.$("textarea[placeholder=\"Post Title\"]");

    return await element.click();

});
Then('I enter post title {kraken-string}', async function (tituloPost) {

    let element = await this.driver.$("textarea[placeholder=\"Post Title\"]");

    return await element.setValue(tituloPost);

});  
Then('I click on the redact paragraph inputbox', async function () {

let element = await this.driver.$("div[data-placeholder=\"Begin writing your post...\"]");

return await element.click();

});
Then('I enter post text {kraken-string}', async function (parrafoPost) {

    let element = await this.driver.$("div[data-placeholder=\"Begin writing your post...\"]");
    
    return await element.setValue(parrafoPost);
    
});
Then('I click on the publish menu', async function () {

let element = await this.driver.$("div[class=\"gh-publishmenu ember-view\"]");

return await element.click();

});
Then('I click on the Set it live now option', async function () {

let element = await this.driver.$("div[class=\"gh-publishmenu-radio-button\"]");

return await element.click();

});
Then('I publish new post', async function () {

let element = await this.driver.$("button[class=\"gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view\"]");

return await element.click();

});
Then('I unpublish new post', async function () {

    let element = await this.driver.$("button[class=\"gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view\"]");
    
    return await element.click();
    
    });
Then('I return to posts view', async function () {

let element = await this.driver.$("a[class=\"blue link fw4 flex items-center ember-view\"]");

return await element.click();

});

Then('I click on posts view', async function () {

let element = await this.driver.$("a[href=\"#/posts/\"]");
    
return await element.click();
    
});

Then('I edit the created post', async function () {

let element = await this.driver.$("a[id=\"ember623\"]");
    
return await element.click();
    
});

Then('I click on settings post button', async function () {

let element = await this.driver.$("a[class=\"post-settings\"]");
    
return await element.click();
    
});

Then('I click on delete button', async function () {

let element = await this.driver.$("[class=\"gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button\"]");
    
return await element.click();
    
});

Then('I confirm delete action', async function () {

let element = await this.driver.$("[id=\"ember727\"]");
    
return await element.click();
    
});

Then('I click on View site', async function () {

let element = await this.driver.$("a[title=\"Open site in new tab\"]");

return await element.click();

});
Then('I click on created post {kraken-string}', async function (tituloPost) {

let element = await this.driver.$("h2="+tituloPost);

return await element.click();

});
Then('I go the TAG section', async function () {

let element = await this.driver.$("a[href=\"#/tags/\"]");

return await element.click();

});
Then('I create a new TAG', async function () {

    let element = await this.driver.$("a[href=\"#/tags/new/\"]");
    
    return await element.click();

});
Then('I click on the redact name inputbox', async function () {

    let element = await this.driver.$("input[name=\"name\"]");
    
    return await element.click();

});
Then('I save my new tag', async function () {

    let element = await this.driver.$("button=Save");
    
    return await element.click();

});
Then('I go to Posts section', async function () {

    let element = await this.driver.$("a[href=\"#/posts/\"]");
    
    return await element.click();

});
Then('I click to edit new post {kraken-string}', async function (tituloPost) {

    let element = await this.driver.$("h3="+tituloPost);
    
    return await element.click();

});
Then('I click on settings of post', async function () {

    let element = await this.driver.$("button[class=\"post-settings\"]");
    
    return await element.click();

});
Then('I click on the redact TAG inputbox', async function () {

    let element = await this.driver.$("#tag-input");
    
    return await element.click();

});
Then('I click the created TAG', async function () {
    
    let element = await this.driver.$("li=TAG Esc-6");
    
    return await element.click();

});
Then('I close settings', async function () {
    
    let element = await this.driver.$("button[aria-label=\"Close\"]");
    
    return await element.click();
});
Then('I click on created TAG', async function () {

    let element = await this.driver.$("div=TAG Esc-6");
    
    return await element.click();
    
});
Then('I click on post from TAG', async function () {

    let element = await this.driver.$("h1=Post Escenario 6");
    
    return await element.click();
    
});
Then('I go the Staff section', async function () {

    let element = await this.driver.$("a[href=\"#/staff/\"]");
    
    return await element.click();
    
});
Then('I click on my profile with name {kraken-string}', async function (bName) {

    let element = await this.driver.$("h3="+bName);

    return await element.click();

});
Then('I click on redact full name inputbox', async function () {

    let element = await this.driver.$("input[placeholder=\"Full Name\"]");
    
    return await element.click();
    
});
Then('I clear the value of the Full name inputbox', async function () {

    let element = await this.driver.$("input[placeholder=\"Full Name\"]");
    
    return await element.clearValue();
    
});
Then('I click save', async function () {

    let element = await this.driver.$("span=Save");
    
    return await element.click();
    
});
Then('I click on my profile', async function () {

    let element = await this.driver.$("span[class=\"gh-user-name mb1\"]");
    
    return await element.click();
    
});
Then('I sign out', async function () {

    let element = await this.driver.$("a[href=\"#/signout/\"]");
    
    return await element.click();
    
});
Then('I go to Pages section', async function () {

    let element = await this.driver.$("a[href=\"#/pages/\"]");
    
    return await element.click();
    
});
Then('I create new page', async function () {

    let element = await this.driver.$("span=New page");
    
    return await element.click();
    
});
Then('I click on the redact page title inputbox', async function () {

    let element = await this.driver.$("textarea[placeholder=\"Page Title\"]");

    return await element.click();

});
Then('I enter page title {kraken-string}', async function (tituloPagina) {

    let element = await this.driver.$("textarea[placeholder=\"Page Title\"]");

    return await element.setValue(tituloPagina);

});
  
Then('I click on the redact page paragraph inputbox', async function () {

let element = await this.driver.$("div[data-placeholder=\"Begin writing your page...\"]");

return await element.click();

});
Then('I publish new page', async function () {

    let element = await this.driver.$("button[class=\"gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view\"]");
    
    return await element.click();
    
});
Then('I return to pages view', async function () {

    let element = await this.driver.$("a[class=\"blue link fw4 flex items-center ember-view\"]");
    
    return await element.click();
    
});
Then('I click on settings of page', async function () {

    let element = await this.driver.$("button[class=\"post-settings\"]");
    
    return await element.click();

});
Then('I click on page link', async function () {

    let element = await this.driver.$("a[class=\"post-view-link\"]");
    
    return await element.click();

});
Then('I click on the Unpublished option', async function () {

    let element = await this.driver.$("div=Unpublished");
    
    return await element.click();

});
Then('I enter page text {kraken-string}', async function (parrafoPagina) {

    let element = await this.driver.$("div[data-placeholder=\"Begin writing your page...\"]");
    
    return await element.setValue(parrafoPagina);
    
});


Then('I scheduled the publish', async function () {

let element = await this.driver.$("[class=\"gh-publishmenu-radio-button\"]");
    
return await element.click();
    
});


Then('I submit the schedule', async function () {

let element = await this.driver.$("[id=\"ember885\"]");
    
return await element.click();
    
});

Then('I go to post view', async function () {

let element = await this.driver.$("[href=\"#/posts/\"]");
    
return await element.click();
    
});

Then('I click on my profile', async function () {

let element = await this.driver.$("[id=\"#/ember1566/\"]");
    
return await element.click();
    
});

Then('I click on your profile tab', async function () {

let element = await this.driver.$("[id=\"#/ember1711/\"]");
    
return await element.click();
    
});

Then('I click on bio text area', async function () {

let element = await this.driver.$("[id=\"#/user-bio/\"]");
    
return await element.click();
    
});
Then('I save the modifications', async function () {

let element = await this.driver.$("[id=\"ember1688\"]");
    
return await element.click();
    
});

When('I enter bio text', async function () {

    let element = await this.driver.$("[id=\"#/user-bio/\"]");

    return await element.setValue("My bio text");

});

Then('I click on my admin name', async function() {

    let element = await this.driver.$('#ember-basic-dropdown-wormhole');

    return await element.click();

});


Then('I click on my profile name', async function() {

    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/section[2]/div/div[2]/a');

    return await element.click();

});

Then('I enter old password {kraken-string}', async function(password) {

    let element = await this.driver.$('#user-password-old');

    return await element.setValue(password);

});

Then('I enter new password {kraken-string}', async function(password) {

    let element = await this.driver.$('#user-password-new');

    return await element.setValue(password);

});

Then('I confirm new password {kraken-string}', async function(password) {

    let element = await this.driver.$('#user-new-password-verification');

    return await element.setValue(password);

});

Then('I click in save change', async function() {

    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/form[2]/div/fieldset/div[4]/button');

    return await element.click();

});

Then('I click in botton name', async function() {

    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]');

    return await element.click();

});

Then('I click signout', async function() {

    let element = await this.driver.$('/html/body/div[1]/div/ul/li[9]/a');

    return await element.click();

});

Then('I select to view recent created tag', async function () {

    let element = await this.driver.$("a[href=\"#/tags/tag-esc-5/\"]");
    
    return await element.click();

});

Then('I empty the inputbox', async function () {

    let element = await this.driver.$("input[name=\"name\"]");
    
    return await element.clearValue();

});

Then('I click to view recent created tag', async function () {

    let element = await this.driver.$("a[href=\"#/tags/tag-esc-15/\"]");
    
    return await element.click();

});

Then('I click to delete TAG', async function () {

    let element = await this.driver.$("button[class=\"gh-btn gh-btn-red gh-btn-icon mb15\"]");
    
    return await element.click();

});


Then('I click to edit new page {kraken-string}', async function (tituloPage) {

    let element = await this.driver.$("h3="+tituloPage);
    
    return await element.click();

});
Then('I click on the page title', async function () {

    let element = await this.driver.$(".gh-editor-title.ember-text-area.gh-input.ember-view");

    return await element.click();

});

Then('I click to settings', async function () {

    let element = await this.driver.$("a[href=\"#/settings/general/\"]");
    
    return await element.click();

});

Then('I click to timezone', async function () {

    let element = await this.driver.$("/html/body/div[2]/div/main/section/div/section/div[2]/div[2]/div[2]/button");
    
    return await element.click();

});

Then('I select timezone {kraken-string}', async function (timezone) {

    let element = await this.driver.$('#timezone');
    await element.click();
    let element2 = await this.driver.$('//*[@id="timezone"]/option[56]');
    return await element2.click();

});

Then('I click to save Settings', async function () {

    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/button');

    return await element.click();

});

Then('I navigate to design', async function () {

    let element = await this.driver.$("a[href=\"#/settings/design/\"]");
    
    return await element.click();
});

Then('I edit the home label to Lorem', async function () {

    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[1]/div/div/span[1]/input");
    await element.click();
    return await element.setValue("Lorem");

});

Then('I save changes to the home label', async function () {

    let element = await this.driver.$("/html/body/div[2]/div/main/section/header/section/button");
    
    return await element.click();
});

Then('I should see new home label Lorem', async function () {

    let element = await this.driver.$("a[href=\"http://localhost:2369/\"]");
    
    return await element.click();
});



When('I click next', async function() {
    let element = await this.driver.$('#ember12 > span');
    return await element.click();
});

When('I click crear post', async function() {
    let element = await this.driver.$('#ember29 > span');
    return await element.click();
});

When('I confirm deletion of TAG', async function() {
    let element = await this.driver.$('span=Delete');
    return await element.click();
});

When('I enter titulo {kraken-string}', async function (titulo) {
    let element = await this.driver.$('#ember63');
    return await element.setValue(titulo);
});

When('I enter contenido post {kraken-string}', async function (contenido) {
    let element = await this.driver.$('.koenig-editor__editor');
    return await element.setValue(contenido);
});

When('I click publish list', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/div[1]/div[1]/span[1]');
    return await element.click();
})

When('I click publish button', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]');
    return await element.click();
})

When('I click on back button', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/div[1]/div[1]/a[1]');
    return await element.click();
})

When('I click on specific post', async function() {
    let element = await this.driver.$('//section/ol/li//h3[text()="Post Escenario 4"]//ancestor::li');
    return await element.click();
})


When('I click on unpublished option', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/div[1]/section[1]/div[1]/div[2]/div[1]');
    return await element.click();
})


When('I click on space', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]');
    return await element.click();
})

When('I click on update', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[1]/div[1]/footer[1]/button[2]/span[1]');
    return await element.click();
})


When('I select tittle {kraken-string}', async function (contenido) {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/textarea[1]');
    return element.setValue(contenido)
});

When('I click back button-route', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/div[1]/div[1]/a[1]');
    return await element.click();
})

When('I click on post-published', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/section[1]/div[1]/ul[2]/li[2]/div[1]/div[1]/ul[1]/li[3]/a[1]/span[2]');
    return await element.click();
})


When('I verify return of title of test', async function() {
    let element = await this.driver.$('//section/ol/li//h3[text()="Prueba cambio de titulo"]//ancestor::li');
    return await element.click();
})

When('I click on drafts button', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/nav[1]/section[1]/div[1]/ul[2]/li[2]/div[1]/div[1]/ul[1]/li[1]/a[1]/span[2]');
    return await element.click();
})


When('I click on draft post if exist', async function() {
    let element = await this.driver.$('//section/ol/li//h3[text()="Titulo Borrador"]//ancestor::li');
    return await element.click();
})

When('I click on list-add-multimedia', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/article[1]/div[4]/button[1]/*[name()="svg"][1]');
    return await element.click();
})

When('I click on add-image', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/article[1]/div[4]/div[1]/div[2]');
    return await element.click();
})


When('I click settings-button f12', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/button[1]/*[name()="svg"][1]/*[name()="path"][2]');
    return await element.click();
})


When('I enter excerpt settings-f12 {kraken-string}', async function (excerpt) {
    let element = await this.driver.$('/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[4]/textarea[1]');
    return await element.setValue(excerpt);
});


When('I click settings-button f16', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/button[1]/*[name()="svg"][1]/*[name()="path"][2]');
    return await element.click();
})


When('I click Twitter-Card f16', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/ul[1]/li[2]/button[1]/span[1]');
    return await element.click();
})

When('I enter Twitter-Card-Title f16 {kraken-string}', async function (twitterTittle) {
    let element = await this.driver.$('/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[4]/textarea[1]');
    return await element.setValue(twitterTittle);
});


When('I click settings-button f20', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/header[1]/section[1]/button[1]/*[name()="svg"][1]/*[name()="path"][2]');
    return await element.click();
})

When('I click Facebook-Card f20', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/ul[1]/li[3]/button[1]/span[1]');
    return await element.click();
})

When('I enter Facebook-Card-Title f20 {kraken-string}', async function (twitterTittle) {
    let element = await this.driver.$('/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[2]/input[1]');
    return await element.setValue(twitterTittle);
});

