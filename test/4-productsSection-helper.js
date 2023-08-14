const { By } = require("selenium-webdriver");
const assert = require("assert");
const { excerciseUrl } = require("../helper/helper");

const validateVisibility = async( driver ) => {
    await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[2]/a")).click();
    const currentUrl = await driver.getCurrentUrl();
    assert(currentUrl, excerciseUrl + "/products");

    try {
        const items = await driver.findElement(By.className("features_items"));
        assert.ok(items, "The products are visible");
    } catch (error) {
        assert.fail("The product list is not visible");
    }
}

module.exports = {
    validateVisibility,
}