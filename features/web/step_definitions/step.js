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



