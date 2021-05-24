import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'
import faker from 'faker';

context('Scenario 03 - General Settings - Escenario aleatorio', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit The name of your site', () => {
        const siteTitle = faker.lorem.words();

        loginPage.visitPage();
        loginPage.login();
        settingsPage.navigateToGeneralSettings();
        settingsPage.expandTitleAndDescription();
        settingsPage.updateNameOfYourSite(siteTitle);
        settingsPage.saveSetting();
        settingsPage.validateTitle(siteTitle);
    })
})