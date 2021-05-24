import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 14 - General Settings', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    beforeEach(() => {
        cy.task("createAllData");
    });

    it('Edit Twitter title', () => {
        let siteTitle = '';
        cy.task("getTitle").then(title => {
            siteTitle = title;
            loginPage.visitPage();
            loginPage.login();
            settingsPage.navigateToGeneralSettings();
            settingsPage.expandTwitterCard();
            settingsPage.updateTwitterTitle(title);
            settingsPage.saveSetting();
            settingsPage.validateSave();
        });
    })
})