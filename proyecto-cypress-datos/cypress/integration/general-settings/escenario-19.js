import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 19 - General Settings', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit Facebook title', () => {
        let siteTitle = '';
        cy.task("getTitle").then(title => {
            siteTitle = title;
            loginPage.visitPage();
            loginPage.login();
            settingsPage.navigateToGeneralSettings();
            settingsPage.expandFacebookCard();
            settingsPage.updateFacebookTitle(title);
            settingsPage.saveSetting();
            settingsPage.validateSave();
        });
    })
})