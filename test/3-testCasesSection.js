const { Builder, Browser } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const { navigateToWebsite } = require("../helper/helper");
const { validateTestCases } = require("./3-testCasesSection-helper");

//* Extensions for chrome
const extensionPath = './extensions/ublock.crx';
const chromeOptions = new chrome.Options();
chromeOptions.addExtensions(extensionPath);
//* Extensions for chrome

let driver;

describe("Test Case 7: Verify Test Cases Page", async() => {

    before( async() => {
        driver = await new Builder()
            .setChromeOptions(chromeOptions)
            .forBrowser(Browser.CHROME)
            .build();
    })
    
    after( async() => await driver.quit() );

    it("1. Navigate to url && Verify that home page is visible successfully", async() => navigateToWebsite( driver ));
    it("2. Verify user is navigated to test cases page successfully", async() => validateTestCases( driver ));
})