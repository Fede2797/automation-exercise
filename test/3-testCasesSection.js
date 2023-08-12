const { Builder, Browser } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const { navigateToWebsite } = require("../helper/helper");
const { validateTestCases } = require("./testCasesSection-helper");

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

describe.only("Test Case 7: Verify Test Cases Page", async() => {
    it("1. Navigate to url && Verify that home page is visible successfully", async() => navigateToWebsite( driver ));
    it("2. Navigate to url && Verify that home page is visible successfully", async() => validateTestCases( driver ));
})