import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'
import faker from 'faker';

context('Scenario 06 - General Settings', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit Used in your theme, meta data and search results', () => {
        const description = faker.lorem.paragraph();

        loginPage.visitPage();
        loginPage.login();
        settingsPage.navigateToGeneralSettings();
        settingsPage.expandTitleAndDescription();
        settingsPage.updateSiteDescription(description);
        settingsPage.saveSetting();
        settingsPage.validateSave();
    })
})