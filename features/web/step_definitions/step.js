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
  
Then('I click on the redact paragraph inputbox', async function () {

let element = await this.driver.$("div[data-placeholder=\"Begin writing your post...\"]");

return await element.click();

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
Then('I return to posts view', async function () {

let element = await this.driver.$("a[class=\"blue link fw4 flex items-center ember-view\"]");

return await element.click();

});
Then('I click on View site', async function () {

let element = await this.driver.$("a[title=\"Open site in new tab\"]");

return await element.click();

});
Then('I click on created post', async function () {

let element = await this.driver.$("h2=Post Escenario 2");

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
Then('I click to edit new post', async function () {

    let element = await this.driver.$("h3=Post Escenario 6");
    
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
