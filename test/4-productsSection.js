const { Builder, Browser } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const { navigateToWebsite } = require("../helper/helper");
const { validateVisibility, validateProductView } = require("./4-productsSection-helper");

//* Extensions for chrome
const extensionPath = './extensions/ublock.crx';
const chromeOptions = new chrome.Options();
chromeOptions.addExtensions(extensionPath);
//* Extensions for chrome

let driver;

describe.only("Test Case 8: Verify All Products and product detail page", async() => {
    
    before( async() => {
        driver = await new Builder()
            .setChromeOptions(chromeOptions)
            .forBrowser(Browser.CHROME)
            .build();
    })
    
    after( async() => await driver.quit() );

    it("1. Navigate to url && Verify that home page is visible successfully", async() => navigateToWebsite( driver ));
    it("2. Verify user is navigated to test cases page successfully", async() => validateVisibility( driver ));
    it("3. Verify that detail detail is visible: product name, category, price, availability, condition, brand", async() => validateProductView( driver ));
})