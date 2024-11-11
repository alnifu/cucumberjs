//Checks if your browser works
require("chromedriver");
const { By, Builder, Capabilities } = require("selenium-webdriver");

(async function example() {
    const capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', { "w3c": false });

    let driver = await new Builder().withCapabilities(capabilities).build();

    try {

        await driver.get('https://practicetestautomation.com/');

    } finally {

        await driver.findElement(By.css('.menu-item-20')).click();
        await new Promise(resolve => setTimeout(resolve, 3000));
        await driver.quit();
    }
})();
