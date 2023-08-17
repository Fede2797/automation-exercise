const assert = require("assert");
const { By } = require("selenium-webdriver");

const excerciseUrl = 'https://automationexercise.com/';

const navigateToWebsite = async( driver ) => {
    // Navigate to website
    await driver.get(excerciseUrl);
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, excerciseUrl, "Current url isn't the same as the excercise url");
    
    // Validate visibility of the website
    let featuresItem = await driver.findElement(By.xpath("/html/body/section[2]/div/div/div[2]/div[1]/h2")).getText();
    let carouselItem = await driver.findElement(By.xpath("/html/body/section[1]/div/div/div/div/div"));

    assert.strictEqual(featuresItem, "FEATURES ITEMS", "'FEATURES ITEMS' text not showing");

    try {
      assert.ok(carouselItem, "The carousel Item exists");
    } catch(error) {
      assert.fail("The carousel Item doesn't exist");
    }
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

module.exports = {
    excerciseUrl,
    navigateToWebsite,
    getRandomInt,
};