import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 25 - General Settings', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit URL of your publications Facebook page', () => {
        let url = '';
        cy.task("getUrl").then(data => {
            url = data;
            loginPage.visitPage();
            loginPage.login();
            settingsPage.navigateToGeneralSettings();
            settingsPage.expandSocialAccounts();
            settingsPage.updateFacebookPageUrl(url);
            settingsPage.saveSetting();
            settingsPage.validateSave();
        });
    })
})