import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';




import LoginPage from '../pageobjects/login.page';

Given('I am on the login page', async () => {
});

When ('I click login with google', async () => {
    await LoginPage.google.click();
})

When('I input email {string}', async (email: string) => {  
    await LoginPage.email.setValue(email);
    }
)

When('I click next', async () => {
    await LoginPage.btnNext.click();
})

// When('I input password {string}', async(password: string) => {
//     await LoginPage.inputPassword.setValue(password);
// })



// Then('I see message logged in successfully', async () => {
//     await LoginPage.successMessage.isDisplayed();
// })




