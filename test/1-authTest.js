const { loginData, incorrectLoginData, existingEmailAccounts } = require("../data/data");
const { Builder, Browser } = require("selenium-webdriver");
const chrome = require('selenium-webdriver/chrome');
const { homepageValidation, 
  navigateToWebsite, 
  accessLogInSection, 
  logInAttempt, 
  logOutUser, 
  accessSignUpSection, 
  signupWithExistingEmail } = require("./authTest-helper");

//* Extensions for chrome
const extensionPath = './extensions/ublock.crx';
const chromeOptions = new chrome.Options();
chromeOptions.addExtensions(extensionPath);
//* Extensions for chrome

// describe("Test Case 1: Register User", async() => {
  
//     const credentialName = "John Doe";
//     const credentialEmail = "fedexample22@gmail.com";
//     let driver;

//     before( async function () {
//       driver = await new Builder()
//           .setChromeOptions(chromeOptions)
//           .forBrowser(Browser.CHROME)
//           .build();
//     });

//     after( async () => await driver.quit() );

//     it("1. Launch the browser && 2. Navigate to automationexercise site", async() => {

//       await driver.get(excerciseUrl);
//       const currentUrl = await driver.getCurrentUrl();
//       assert.strictEqual(currentUrl, excerciseUrl);
//     })

//     it("3. Verify that home page is visible succesfully", async() => {

//         let featuresItem = await driver.findElement(By.xpath("/html/body/section[2]/div/div/div[2]/div[1]/h2")).getText();
//         let carouselItem = await driver.findElement(By.xpath("/html/body/section[1]/div/div/div/div/div"));
//         assert.strictEqual(featuresItem, "FEATURES ITEMS", "'FEATURES ITEMS' text not showing");

//         try {
//           assert.ok(carouselItem, "The carousel Item exists");
//         } catch(error) {
//           assert.fail("The carousel Item doesn't exist");
//         }
        
//     });

//     it("4. Click on 'Signup / Login' button redirects to login endpoint", async() => {

//       await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[4]/a")).click();
//       const currentUrl = await driver.getCurrentUrl();
//       assert.strictEqual(currentUrl, excerciseUrl + "login");

//     })

//     it("5. Verify 'New User Signup!' is visible", async() => {

//       const newUserSignup = await driver.findElement(By.css("#form > div > div > div:nth-child(3) > div > h2")).getText()
//       assert.strictEqual(newUserSignup, "New User Signup!");

//     })

//     it("6. Enter name and email address && 7. Click 'Signup' button && 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible", async() => {
//       await driver.findElement(By.css("input[data-qa=signup-name]")).sendKeys(credentialName)
//       await driver.findElement(By.css("input[data-qa=signup-email]")).sendKeys(credentialEmail)
//       await driver.findElement(By.css("button[data-qa=signup-button]")).click()
//       const validation = await driver.findElement(By.xpath("/html/body/section/div/div/div/div/h2/b")).getText();
//       assert.strictEqual(validation, "ENTER ACCOUNT INFORMATION");
      
//     })

//     it("9. 10. 11. 12. 13. 14. Fill every detail and create account ", async() => {

//       await driver.findElement(By.css("#id_gender1")).click()
//       await driver.findElement(By.css("input[data-qa=password]")).sendKeys("ThisIsAPassword123")
//       const daySelectElement = await driver.findElement(By.css("select[data-qa=days]"));
//       const daySelect = new Select(daySelectElement);
//       await daySelect.selectByValue("13");
//       const monthSelectElement = await driver.findElement(By.css("select[data-qa=months]"));
//       const monthSelect = new Select(monthSelectElement);
//       await monthSelect.selectByValue("5");
//       const yearSelectElement = await driver.findElement(By.css("select[data-qa=years]"));
//       const yearSelect = new Select(yearSelectElement);
//       await yearSelect.selectByValue("2000");
  
//       await driver.findElement(By.css("#newsletter")).click();

//       await driver.findElement(By.css("#optin")).click();
//       await driver.findElement(By.css("input[data-qa=first_name]")).sendKeys(credentialName.split(" ")[0]);
//       await driver.findElement(By.css("input[data-qa=last_name]")).sendKeys(credentialName.split(" ")[1]);
//       await driver.findElement(By.css("input[data-qa=company]")).sendKeys("Totally Real Company");
//       await driver.findElement(By.css("input[data-qa=address]")).sendKeys("Bv. Oroño 36");
//       await driver.findElement(By.css("input[data-qa=address]")).sendKeys("Pellegrini 728");
//       await driver.findElement(By.css("input[data-qa=address2]")).sendKeys("Pellegrini 728");
//       const countrySelectElement = await driver.findElement(By.css("select[data-qa=country]"));
//       const countrySelect = new Select(countrySelectElement);
//       await countrySelect.selectByValue("Canada");
//       await driver.findElement(By.css("input[data-qa=state]")).sendKeys("Alberta");
//       await driver.findElement(By.css("input[data-qa=city]")).sendKeys("Some city");
//       await driver.findElement(By.css("input[data-qa=zipcode]")).sendKeys("202000");      
//       await driver.findElement(By.css("input[data-qa=mobile_number]")).sendKeys("261212879483");

//       await driver.findElement(By.css("button[data-qa=create-account]")).click();

//       const validation = await driver.findElement(By.css("h2[data-qa=account-created]")).getText();

//       assert.strictEqual(validation, "ACCOUNT CREATED!");

//     })

//     it("15. Click 'Continue' button && 16. Verify that 'Logged in as username' is visible", async() => {

//       await driver.findElement(By.css("a[data-qa=continue-button]")).click()
      
//       const validation = await driver.findElement(By.xpath("/html/body/header/div/div/div/div[2]/div/ul/li[10]/a")).getText()
//       assert(validation, credentialName);
//     })
// });

describe("Test Case 2: Login User with correct email and password", async() => {

  loginData.forEach( async( userData ) => {

    describe(`Logging in with email: ${userData.email} and pass: ${userData.password}`, async() => {
      let driver;
      
      before( async() => {
        driver = await new Builder()
          .setChromeOptions(chromeOptions)
          .forBrowser(Browser.CHROME)
          .build();
      } );
    
      after( async() => await driver.quit() );
    
      it("1. Launch browser && 2. Navigate to url 'http://automationexercise.com'", async() => navigateToWebsite( driver ) );
    
      it("3. Verify that home page is visible succesfully", async() => homepageValidation( driver ));

      it("4. Click on 'Signup / Login' button && 5. Verify 'Login to your account' is visible", async() => accessLogInSection( driver ));

      it("6. Enter correct email address and password", async() => logInAttempt({ driver, userData }));
    })
  })
});

describe("Test Case 3: Login User with incorrect email and password", async() => {

  incorrectLoginData.forEach( async( userData ) => {

    describe(`Incorrect ${userData.incorrect}. Logging in with credentials: ${userData.email} [email] and ${userData.password} [password]`, async() => {
      let driver;
      
      before( async() => {
        driver = await new Builder()
          .setChromeOptions(chromeOptions)
          .forBrowser(Browser.CHROME)
          .build();
      } );
    
      after( async() => await driver.quit() );
    
      it("1. Launch browser && 2. Navigate to url 'http://automationexercise.com'", async() => navigateToWebsite( driver ) );
    
      it("3. Verify that home page is visible succesfully", async() => homepageValidation( driver ));

      it("4. Click on 'Signup / Login' button && 5. Verify 'Login to your account' is visible", async() => accessLogInSection( driver ));

      it("6. Enter incorrect email address and password", async() => logInAttempt({ driver, userData }));
    })
  })
});

describe("Test Case 4: Logout user", async() => {

  loginData.forEach( async( userData ) => {

    describe(`Logging in with email: ${userData.email} and pass: ${userData.password}`, async() => {
      let driver;
      
      before( async() => {
        driver = await new Builder()
          .setChromeOptions(chromeOptions)
          .forBrowser(Browser.CHROME)
          .build();
      } );
      
      after( async() => await driver.quit() );
      
      it("1. Launch browser && 2. Navigate to url 'http://automationexercise.com'", async() => navigateToWebsite( driver ) );
      
      it("2. Verify that home page is visible succesfully", async() => homepageValidation( driver ));
      
      it("3. Click on 'Signup / Login' button && Verify 'Login to your account' is visible", async() => accessLogInSection( driver ));
      
      it("4. Enter correct email address and password", async() => logInAttempt({ driver, userData }));
      
      it("5. Click 'Logout' button and Verify that user is navigated to login page", async() => logOutUser( driver ));
    })
  })
});

describe("Test Case 5: Register User with existing email", async() => {
  existingEmailAccounts.forEach( userData => {
      describe(`Attemting sign up with credentials ${userData.email} [email] and ${userData.credentialName} [Name]`, async() => {
        let driver;
    
        before( async function () {
          driver = await new Builder()
              .setChromeOptions(chromeOptions)
              .forBrowser(Browser.CHROME)
              .build();
        });
    
        after( async () => await driver.quit() );
        
        it("1. Launch the browser && 2. Navigate to automationexercise site", async() => navigateToWebsite( driver ))
    
        it("2. Verify that home page is visible succesfully", async() => homepageValidation( driver ));
    
        it("3. Click on 'Signup / Login' and Verify 'New User Signup!' is visible", async() => accessSignUpSection( driver ))
    
        it("4. Enter name and already registered email address, Click 'Signup' button && Verify error 'Email Address already exist!' is visible", async() => signupWithExistingEmail({ driver, userData }))
      })
    })
});