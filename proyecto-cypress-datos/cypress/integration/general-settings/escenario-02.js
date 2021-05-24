import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 02 - General Settings - Pool de datos aleatorio dinámico', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    beforeEach(() => {
        cy.task("createAllData");
    });

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