import { Before, After } from '@cucumber/cucumber';
import { browser } from '@wdio/globals';

Before(async function () {
    await browser.url('https://v3-web-app-micro.staging.superapp.co.id/auth/login');
    await browser.maximizeWindow();
});

After(async function () {

});
