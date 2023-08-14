const { By } = require("selenium-webdriver");
const { excerciseUrl } = require("../helper/helper");

const validateVisibility = async( driver ) => {
    driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[2]/a")).click();
    const currentUrl = driver.getCurrentUrl();
    assert(currentUrl, excerciseUrl + "/products");
}

module.exports = {
    validateVisibility,
}