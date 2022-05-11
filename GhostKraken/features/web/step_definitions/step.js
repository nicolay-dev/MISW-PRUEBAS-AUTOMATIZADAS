const { Given, When, Then } = require('@cucumber/cucumber');
const { now } = require('lodash');
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
Then('I click the icon to create new post', async function () {

    let element = await this.driver.$("a[title=\"New post\"]");

    return await element.click();

});
Then('I click on the redact post title inputbox', async function () {

    let element = await this.driver.$("textarea[placeholder=\"Post Title\"]");

    return await element.click();

});

Then('I delete current post title', async function () {

    let element = await this.driver.$("textarea[placeholder=\"Post Title\"]");

    return await element.clearValue();

});
 
Then('I click on the redact excerpt inputbox', async function () {

let element = await this.driver.$("textarea[name=\"post-setting-custom-excerpt\"]");

return await element.click();

});

Then('I click on the redact post paragraph inputbox', async function () {

    let element = await this.driver.$("div[data-placeholder=\"Begin writing your post...\"]");
    
    return await element.click();
    
    });

Then('I click on the publish-update menu', async function () {

let element = await this.driver.$("div[class=\"gh-publishmenu ember-view\"]");

return await element.click();

});
Then('I click on the Set it live now option', async function () {

let element = await this.driver.$("div[class=\"gh-publishmenu-radio-button\"]");

return await element.click();

});
Then('I click on publish-update', async function () {

let element = await this.driver.$("button[class=\"gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view\"]");

return await element.click();

});
Then('I unpublish post', async function () {

    let element = await this.driver.$("button[class=\"gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view\"]");
    
    return await element.click();
    
    });
Then('I return to section view', async function () {

let element = await this.driver.$("a[class=\"blue link fw4 flex items-center ember-view\"]");

return await element.click();

});

Then('I click on post-page settings', async function () {

let element = await this.driver.$("button[class=\"post-settings\"]");
    
return await element.click();
    
});

Then('I click on delete page-post', async function () {

    let element = await this.driver.$("button[class=\"gh-btn gh-btn-hover-red gh-btn-icon settings-menu-delete-button\"]");
        
    return await element.click();
        
});

Then('I click on View site in new tab', async function () {

let element = await this.driver.$("a[title=\"Open site in new tab\"]");

return await element.click();

});

Then('I click on published post-page {kraken-string}', async function (titulo) {

let element = await this.driver.$("h2="+titulo);

return await element.click();

});
Then('I go to Tag section', async function () {

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

Then('I click save', async function () {

    let element = await this.driver.$("button=Save");
    
    return await element.click();

});

Then('I click change password', async function () {

    let element = await this.driver.$("button=Change Password");
    
    return await element.click();

});

Then('I go to Posts section', async function () {

    let element = await this.driver.$("a[href=\"#/posts/\"]");
    
    return await element.click();

});

Then('I click to edit post-page-tag {kraken-string}', async function (titulo) {

    let element = await this.driver.$("h3="+titulo);
    
    return await element.click();

});

Then('I click on the redact TAG inputbox', async function () {

    let element = await this.driver.$("#tag-input");
    
    return await element.click();

});
Then('I click the created TAG {kraken-string}', async function (titulo) {
    
    let element = await this.driver.$("li="+titulo);
    
    return await element.click();

});
Then('I close settings', async function () {
    
    let element = await this.driver.$("button[aria-label=\"Close\"]");
    
    return await element.click();
});
Then('I click on TAG {kraken-string}', async function (titulo) {

    let element = await this.driver.$("div="+titulo);
    
    return await element.click();
    
});
Then('I click on post-page {kraken-string} from TAG', async function (titulo) {

    let element = await this.driver.$("h1="+titulo);
    
    return await element.click();
    
});
Then('I go to Staff section', async function () {

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

Then('I delete page title', async function () {

    let element = await this.driver.$("textarea[placeholder=\"Page Title\"]");

    return await element.clearValue();

});
  
Then('I click on the redact page paragraph inputbox', async function () {

let element = await this.driver.$("div[data-placeholder=\"Begin writing your page...\"]");

return await element.click();

});

Then('I return to pages view', async function () {

    let element = await this.driver.$("a[class=\"blue link fw4 flex items-center ember-view\"]");
    
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

Then('I click on the redact UTC time', async function () {

    let element = await this.driver.$("div[class=\"gh-date-time-picker-time \"]");
        
    return await element.click();
        
});

Then('I delete default scheduled UTC time', async function () {

    let element = await this.driver.$("/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[2]/input");
        
    return await element.setValue("");
        
});

Then('I set publish time for 3 minutes in the future', async function () {

    function hora() {
        return new Date().getUTCHours();
    };

    function minuto() {
        return new Date().getMinutes()+3;
    };

    let horaUTC = hora().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    let minutoUTC = minuto().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    let futureTime = horaUTC + ":" + minutoUTC;
    
    let element = await this.driver.$("div[class=\"gh-date-time-picker-time \"]");
        
    return await element.setValue(futureTime);
        
});

Then('I submit the schedule', async function () {

    let element = await this.driver.$("button[class=\"gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view\"]");
    
    return await element.click();
    
});

Then('I click on bio text area', async function () {

let element = await this.driver.$("textarea[id=\"user-bio\"]");
    
return await element.click();
    
});

Then('I click on my admin name', async function() {

    let element = await this.driver.$('#ember-basic-dropdown-wormhole');

    return await element.click();

});

Then('I click on the redact old password inputbox', async function() {

    let element = await this.driver.$('#user-password-old');

    return await element.click();

});

Then('I click on the redact new password inputbox', async function() {

    let element = await this.driver.$('#user-password-new');

    return await element.click();

});

Then('I click on the redact new password verification inputbox', async function() {

    let element = await this.driver.$('#user-new-password-verification');

    return await element.click();

});

Then('I empty the inputbox', async function () {

    let element = await this.driver.$("input[name=\"name\"]");
    
    return await element.clearValue();

});

Then('I click to delete TAG', async function () {

    let element = await this.driver.$("button[class=\"gh-btn gh-btn-red gh-btn-icon mb15\"]");
    
    return await element.click();

});

Then('I go to General settings', async function () {

    let element = await this.driver.$("a[href=\"#/settings/general/\"]");
    
    return await element.click();

});

Then('I click on Site timezone', async function () {

    let element = await this.driver.$("/html/body/div[2]/div/main/section/div/section/div[2]/div[2]/div[2]/button");
    
    return await element.click();

});

Then('I select timezone {kraken-string}', async function (timezone) {

    let element = await this.driver.$("select[name=\"general[timezone]\"]");
    let element2 = await this.driver.$("option[value=\""+timezone+"\"]");
    
    await element.click()
    return await element2.click();

});

Then('I click Save settings', async function () {

    let element = await this.driver.$('button=Save settings');

    return await element.click();

});

Then('I go to Design settings', async function () {

    let element = await this.driver.$("a[href=\"#/settings/design/\"]");
    
    return await element.click();
});

Then('I click on the author label', async function () {

    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[3]/div/div/span[1]/input");
    
    return await element.click();

});

Then('I delete author label', async function () {

    let element = await this.driver.$("/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[3]/div/div/span[1]/input");
    
    return await element.clearValue();

});

When('I confirm deletion', async function() {
    let element = await this.driver.$('span=Delete');
    return await element.click();
});

When('I click on label {kraken-string}', async function(label) {
    let element = await this.driver.$('a='+label);
    return await element.click();
});

When('I click on Drafts section', async function() {
    let element = await this.driver.$('a[title=\"Drafts\"]');
    return await element.click();
});

When('I extend to see posts types', async function() {
    let element = await this.driver.$('button[aria-label=\"Expand custom post types\"]');
    return await element.click();
});

When('I click on list-add-multimedia', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/article[1]/div[4]/button[1]/*[name()="svg"][1]');
    return await element.click();
});

When('I click on add-image', async function() {
    let element = await this.driver.$('/html[1]/body[1]/div[2]/div[1]/main[1]/section[1]/div[1]/div[1]/article[1]/div[4]/div[1]/div[2]');
    return await element.click();
});

When('I click Twitter card', async function() {
    let element = await this.driver.$('b=Twitter card');
    return await element.click();
});

When('I click Facebook card', async function() {
    let element = await this.driver.$('b=Facebook card');
    return await element.click();
});

When('I click on the redact Twitter title inputbox', async function() {
    let element = await this.driver.$('input[name=\"post-setting-twitter-title\"]');
    return await element.click();
});

When('I click on the redact Facebook title inputbox', async function() {
    let element = await this.driver.$('input[name=\"post-setting-og-title\"]');
    return await element.click();
});

When('I go back to settings', async function() {
    let element = await this.driver.$('button[aria-label=\"Back\"]');
    return await element.click();
});

