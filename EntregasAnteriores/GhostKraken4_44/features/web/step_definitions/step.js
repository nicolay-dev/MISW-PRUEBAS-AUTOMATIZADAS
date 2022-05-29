const { Given, When, Then } = require('@cucumber/cucumber');
const { now } = require('lodash');
When('I enter email {kraken-string}', async function (email) {

    let element = await this.driver.$('input[name="identification"]');

    return await element.setValue(email);

});

When('I enter password {kraken-string}', async function (password) {

    let element = await this.driver.$('input[name="password"]');

    return await element.setValue(password);

});

When('I click Sign in', async function () {

    let element = await this.driver.$('button[type="Submit"]');

    return await element.click();

});

Then('I click the icon to create new post', async function () {

    let element = await this.driver.$("a[title=\"New post\"]");

    return await element.click();

});

Then('I click on the redact post title inputbox', async function () {

    let element = await this.driver.$("textarea[placeholder=\"Post title\"]");

    return await element.click();

});

Then('I delete current post title', async function () {

    let element = await this.driver.$("textarea[placeholder=\"Post title\"]");

    return await element.clearValue();

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

    let element = await this.driver.$("button[class=\"gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view\"]");

    return await element.click();

});

Then('I confirm publish-update', async function () {

    let element = await this.driver.$("button[class=\"gh-btn gh-btn-black gh-btn-icon ember-view\"]");

    return await element.click();

});

Then('I return to section view', async function () {

    let element = await this.driver.$("a[class=\"ember-view gh-editor-back-button\"]");

    return await element.click();

});

Then('I click on post-page settings', async function () {

    let element = await this.driver.$('button[title="Settings"]');

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

    let element = await this.driver.$("h2=" + titulo);

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

Then('I go to Posts section', async function () {

    let element = await this.driver.$("a[href=\"#/posts/\"]");

    return await element.click();

});

Then('I click to edit post-page-tag {kraken-string}', async function (titulo) {

    let element = await this.driver.$("h3=" + titulo);

    return await element.click();

});

Then('I close settings', async function () {

    let element = await this.driver.$("button[aria-label=\"Close\"]");

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

    let element = await this.driver.$("textarea[placeholder=\"Page title\"]");

    return await element.click();

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

When('I confirm deletion', async function () {
    let element = await this.driver.$('span=Delete');
    return await element.click();
});

When('I take a screenshot {kraken-string}', async function (image) {

    return await this.driver.saveScreenshot(`./screenshots/${image}.png`);
});