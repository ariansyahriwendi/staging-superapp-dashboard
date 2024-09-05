import { $, $$ } from '@wdio/globals'
import Page from '../base/base.page';
import { browser } from '@wdio/globals'
import { expect } from '@wdio/globals'



class LoginPage extends Page {

   

    // public async switchToGoogleWindow() {
    //     const parentHandle = await browser.getWindowHandle();
    //     const childHandles = await browser.getWindowHandles();

    //     for (const handle of childHandles) {
    //         if (handle !== parentHandle) {
    //             await browser.switchToWindow(handle);
    //             console.log(`Switched to window with title: ${await browser.getTitle()}`);
    //             break; // Ensure to break after switching to the correct window
    //         }
    //     }
    // }


    // public async switchToGoogleWindow2() {
    //     const handles = await browser.getWindowHandles();
    //     for (const handle of handles) {
    //         await browser.switchToWindow(handle);
    //         const title = await browser.getTitle();
    //         if (title.includes('Sign in - Google Accounts')) {
    //             console.log('Switched to Google Login Window:', title);
    //             break;
    //         }
    //     }
    // }

    // public async switchToIframe() {
    //     const iframes = await $$('iframe');
    //     if (iframes.length > 0) {
    //         await browser.switchToFrame(iframes[0]);
    //         console.log('Switched to iframe containing the email input');
    //     }
    // }


    // public async switchToIframe2() {
    //     const iframe = await $('iframe');
    //     await iframe.waitForExist({ timeout: 5000 }); // Pastikan iframe muncul
    //     await browser.switchToFrame(iframe); // Beralih ke iframe
    // }

    // public async switchToCorrectIframe() {
    //     const iframes = await $$('iframe');
    //     for (let iframe of iframes) {
    //         await browser.switchToFrame(iframe);
    //         const isInputVisible = await $('input[type="email"]').isDisplayed();
    //         if (isInputVisible) {
    //             break; // Stop jika iframe yang benar ditemukan
    //         }
            // await browser.switchToParentFrame(); // Kembali ke parent frame jika tidak benar
        // }
    // }

    

    public get google () {
        return $("//span[contains(text(), 'Login dengan Google')]")
    }

    public get email () {
        return $("//span[contains(text(), 'Email or phone')]");
    }

    public get btnNext () {
        return $("//span[contains(text(), 'Next')]");
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('#submit');
    }

    public get successMessage() {
        return $(`//span[text()="Logged In Successfully"]`);
    }

    // public get inputUsername () {
    //     return $('#username');
    // }

    // public get inputPassword () {
    //     return $('#password');
    // }

    // public get btnSubmit () {
    //     return $('#submit');
    // }

    // public get successMessage() {
    //     return $(`//span[text()="Logged In Successfully"]`);
    // }

}

export default new LoginPage();
