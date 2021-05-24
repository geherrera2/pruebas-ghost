import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 28 - General Settings - Pool de datos a-priori', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit URL of your publications Twitter profile', () => {
        let url = '';
        cy.task("getUrl").then(data => {
            url = data;

            loginPage.visitPage();
            loginPage.login();
            settingsPage.navigateToGeneralSettings();
            settingsPage.expandSocialAccounts();
            settingsPage.updateTwitterProfileUrl(url);
            settingsPage.saveSetting();
            settingsPage.validateSave();
        });
    })
})