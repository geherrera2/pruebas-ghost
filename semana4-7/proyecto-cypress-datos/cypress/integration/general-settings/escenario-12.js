import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'
import faker from 'faker';

context('Scenario 12 - General Settings - Escenario aleatorio', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit Meta description', () => {
        const description = faker.lorem.paragraph();

        loginPage.visitPage();
        loginPage.login();
        settingsPage.navigateToGeneralSettings();
        settingsPage.expandMetaData();
        settingsPage.updateMetaDescription(description);
        settingsPage.saveSetting();
        settingsPage.validateSave();
    })
})