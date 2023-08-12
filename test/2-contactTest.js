const { Builder, Browser } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const { contactSection, 
    sendMessage, 
    returnHome} = require("./contactTest-helper");
const { navigateToWebsite } = require("../helper/helper");
const { contactMessageData } = require("../data/data");

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

describe("Test Case 6: Contact Us Form", async() => {
    contactMessageData.map( data => {
        describe(`Sending contact us message by ${data.email}`, async() => {
            it("1. Navigate to url && Verify that home page is visible", async() => await navigateToWebsite( driver ) );
            it("2. Click on 'Contact Us' button && Verify 'GET IN TOUCH' is visible", async() => await contactSection( driver ) );
            it("3. Enter name, email, subject and message && Upload file (if needed) && Click 'Submit' button && Click OK button", async() => await sendMessage( driver, data ) );
            it("4. Click 'Home' button and verify that landed to home page successfully", async() => await returnHome( driver ) );
        })
    })
})