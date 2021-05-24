import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 26 - General Settings', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    beforeEach(() => {
        cy.task("createAllData");
    });

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