const assert = require("assert");
const { By } = require("selenium-webdriver");

const validateTestCases = async( driver ) => {
    await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[5]/a")).click();
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, "https://automationexercise.com/test_cases", "The button does not redirect to the right url");
}

module.exports = {
    validateTestCases,
}