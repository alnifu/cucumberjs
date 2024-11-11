const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
require("chromedriver");
const { By, Builder, Capabilities } = require("selenium-webdriver");

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });

Given('I open the login page', async function () {
    this.driver = new Builder().withCapabilities(capabilities).build();
    await this.driver.get('http://localhost:3000');
});

When('I enter {string} as username', async function (username) {
    await this.driver.findElement(By.id('user')).sendKeys(username);
});

When('I enter {string} as password', async function (password) {
    await this.driver.findElement(By.id('pass')).sendKeys(password);
});

When('I click on the login button', async function () {
    await this.driver.findElement(By.id('sub')).click();
});

Then('I should see {string}', async function (expectedMessage) {
    let errorMessage = await this.driver.findElement(By.id('err')).getText();
    assert.strictEqual(errorMessage, expectedMessage);
});

Then('I should be on the success page', async function () {
    let currentUrl = await this.driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'http://localhost:3000/success');
});
