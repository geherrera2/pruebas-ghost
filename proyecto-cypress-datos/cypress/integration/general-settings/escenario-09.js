import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'
import faker from 'faker';

context('Scenario 09 - General Settings', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit Meta title', () => {
        const title = faker.lorem.words();

        loginPage.visitPage();
        loginPage.login();
        settingsPage.navigateToGeneralSettings();
        settingsPage.expandMetaData();
        settingsPage.updateMetaTitle(title);
        settingsPage.saveSetting();
        settingsPage.validateSave();
    })
})