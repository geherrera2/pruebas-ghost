import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'
import faker from 'faker';

context('Scenario 30 - General Settings', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit URL of your publications Twitter profile', () => {
        const url = faker.internet.url();

        loginPage.visitPage();
        loginPage.login();
        settingsPage.navigateToGeneralSettings();
        settingsPage.expandSocialAccounts();
        settingsPage.updateTwitterProfileUrl(url);
        settingsPage.saveSetting();
        settingsPage.validateSave();
    })
})