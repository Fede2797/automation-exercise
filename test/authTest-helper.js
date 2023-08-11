const { By } = require("selenium-webdriver");
const assert = require("assert");
const { excerciseUrl } = require("../helper/helper");

const navigateToWebsite = async( driver ) => {
    await driver.get(excerciseUrl);
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, excerciseUrl);
}

const homepageValidation = async( driver ) => {    
    let featuresItem = await driver.findElement(By.xpath("/html/body/section[2]/div/div/div[2]/div[1]/h2")).getText();
    let carouselItem = await driver.findElement(By.xpath("/html/body/section[1]/div/div/div/div/div"));

    assert.strictEqual(featuresItem, "FEATURES ITEMS", "'FEATURES ITEMS' text not showing");

    try {
      assert.ok(carouselItem, "The carousel Item exists");
    } catch(error) {
      assert.fail("The carousel Item doesn't exist");
    }
}

const accessSignUpSection = async( driver ) => {
  await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[4]/a")).click();
  const currentUrl = await driver.getCurrentUrl();
  assert.strictEqual(currentUrl, excerciseUrl + "login");
  const newUserSignup = await driver.findElement(By.css("#form > div > div > div:nth-child(3) > div > h2")).getText()
  assert.strictEqual(newUserSignup, "New User Signup!");
}

const accessLogInSection = async( driver ) => {
    await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[4]/a")).click();
    const validation = await driver.findElement(By.css(".login-form > h2")).getText();
    assert.strictEqual(validation, "Login to your account");
}

const logInAttempt = async({ driver, userData }) => {
    await driver.findElement(By.css("input[data-qa=login-email]")).sendKeys(userData.email);
    await driver.findElement(By.css("input[data-qa=login-password]")).sendKeys(userData.password);
    await driver.findElement(By.css("button[data-qa=login-button]")).click();

    try {
      const validation = await driver.findElement(By.xpath("/html/body/section/div/div/div[1]/div/form/p")).getText()

      assert(validation, "Your email or password is incorrect!");
    } catch (error) {
      const validation = await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[10]/a")).getText()

      assert(validation, userData.credentialName);
    }
}

const logOutUser = async( driver ) => {
    await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[4]/a")).click();
    const currentUrl = await driver.getCurrentUrl();
    assert.strictEqual(currentUrl, 'https://automationexercise.com/login');
}

const signupWithExistingEmail = async({ driver, userData }) => {
    await driver.findElement(By.css("input[data-qa=signup-name]")).sendKeys(userData.credentialName);
    await driver.findElement(By.css("input[data-qa=signup-email]")).sendKeys(userData.email);
    await driver.findElement(By.css("button[data-qa=signup-button]")).click();
    const validation = await driver.findElement(By.xpath("/html/body/section/div/div/div[3]/div/form/p")).getText();
    assert.strictEqual(validation, "Email Address already exist!");
}

module.exports = {
  accessLogInSection,
  accessSignUpSection,
  homepageValidation,
  logInAttempt,
  logOutUser,
  navigateToWebsite,
  signupWithExistingEmail,
}