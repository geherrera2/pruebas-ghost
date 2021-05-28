import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 03 - General Settings - Pool de datos a-priori', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit The name of your site', () => {
        let siteTitle = '';
        cy.task("getTitle").then(title => {
            siteTitle = title;
            loginPage.visitPage();
            loginPage.login();
            settingsPage.navigateToGeneralSettings();
            settingsPage.expandTitleAndDescription();
            settingsPage.updateNameOfYourSite(siteTitle);
            settingsPage.saveSetting();
            settingsPage.validateTitle(siteTitle);
        });
    })
})