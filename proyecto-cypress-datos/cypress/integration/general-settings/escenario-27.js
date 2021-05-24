import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'
import faker from 'faker';

context('Scenario 27 - General Settings', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit URL of your publications Facebook page', () => {
        const url = faker.internet.url();

        loginPage.visitPage();
        loginPage.login();
        settingsPage.navigateToGeneralSettings();
        settingsPage.expandSocialAccounts();
        settingsPage.updateFacebookPageUrl(url);
        settingsPage.saveSetting();
        settingsPage.validateSave();
    })
})