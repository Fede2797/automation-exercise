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

const validateProductView = async( driver ) => {
    await driver.findElement(By.xpath("/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[2]/ul/li/a")).click();
    try {
        const name = await driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/h2")).getText();
        const category = await driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[1]")).getText();
        const price = await driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/span")).getText();
        const availability = await driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[2]")).getText();
        const condition = await driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[3]")).getText();
        const brand = await driver.findElement(By.xpath("/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[4]")).getText();

        assert.ok([name, category, price, availability, condition, brand], "The product detail are visible");
    } catch (error) {
        assert.fail("The product detail is not visible");
    }
}

module.exports = {
    validateVisibility,
    validateProductView,
}