const { Builder, Browser } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const { navigateToWebsite } = require("../helper/helper");
const { validateVisibility } = require("./4-productsSection-helper");

//* Extensions for chrome
const extensionPath = './extensions/ublock.crx';
const chromeOptions = new chrome.Options();
chromeOptions.addExtensions(extensionPath);
//* Extensions for chrome

let driver;

before( async() => {
    driver = await new Builder()
        .setChromeOptions(chromeOptions)
        .forBrowser(Browser.CHROME)
        .build();
})

after( async() => await driver.quit() );

describe.only("Test Case 8: Verify All Products and product detail page", async() => {
    it("1. Navigate to url && Verify that home page is visible successfully", async() => navigateToWebsite( driver ));
    //todo 4. Click on 'Products' button
    //todo 5. Verify user is navigated to ALL PRODUCTS page successfully
    //todo 6. The products list is visible
    it("2. Verify user is navigated to test cases page successfully", async() => validateVisibility( driver ));
    //todo 7. Click on 'View Product' of first product
    //todo 8. User is landed to product detail page
    //todo 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
})