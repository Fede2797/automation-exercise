
const assert = require("assert");
const { By } = require("selenium-webdriver");
const { excerciseUrl } = require("../helper/helper");

const contactSection = async( driver ) => {
    await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[8]/a")).click();
    const validation = await driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/div/h2"));
    assert(validation, "GET IN TOUCH", "GET IN TOUCH Label is not visible");
}

const sendMessage = async( driver, data ) => {
    // Fill every field of the message
    await driver.findElement(By.css("input[data-qa=name]")).sendKeys(data.name);
    await driver.findElement(By.css("input[data-qa=email]")).sendKeys(data.email);
    await driver.findElement(By.css("input[data-qa=subject]")).sendKeys(data.subject);
    await driver.findElement(By.css("textarea[data-qa=message]")).sendKeys(data.message);
    
    // Check if the message has a file and upload it
    data.filePath !== '' && await driver.findElement(By.css("input[name=upload_file]")).sendKeys(data.filePath);
    
    // Send message
    await driver.findElement(By.css("input[data-qa=submit-button]")).click();
    await driver.switchTo().alert().accept();

    // Validate success label
    const validation = await driver.findElement(By.xpath("/html/body/div/div[2]/div[1]/div/div[2]"));
    assert(validation,'Success! Your details have been submitted successfully.', "Success message isn't showing");
}

const returnHome = async( driver ) => {
    await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[1]/a")).click();
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, excerciseUrl, "The website did not land to home page");
}

module.exports = {
    contactSection,
    sendMessage,
    returnHome,
}