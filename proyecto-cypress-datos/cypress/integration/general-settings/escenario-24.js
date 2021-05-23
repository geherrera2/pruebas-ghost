import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'
import faker from 'faker';

context('Scenario 24 - General Settings', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit Facebook description', () => {
        const description = faker.lorem.paragraph();

        loginPage.visitPage();
        loginPage.login();
        settingsPage.navigateToGeneralSettings();
        settingsPage.expandFacebookCard();
        settingsPage.updateFacebookDescription(description);
        settingsPage.saveSetting();
        settingsPage.validateSave();
    })
})