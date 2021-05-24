import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'
import faker from 'faker';

context('Scenario 21 - General Settings - Escenario aleatorio', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit Facebook title', () => {
        const title = faker.lorem.words();

        loginPage.visitPage();
        loginPage.login();
        settingsPage.navigateToGeneralSettings();
        settingsPage.expandFacebookCard();
        settingsPage.updateFacebookTitle(title);
        settingsPage.saveSetting();
        settingsPage.validateSave();
    })
})