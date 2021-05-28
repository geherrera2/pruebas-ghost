import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 08 - General Settings - Pool de datos aleatorio dinámico', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    beforeEach(() => {
        cy.task("createAllData");
    });

    it('Edit Meta title', () => {
        let siteTitle = '';
        cy.task("getTitle").then(title => {
            siteTitle = title;
            loginPage.visitPage();
            loginPage.login();
            settingsPage.navigateToGeneralSettings();
            settingsPage.expandMetaData();
            settingsPage.updateMetaTitle(title);
            settingsPage.saveSetting();
            settingsPage.validateSave();
        });
    })
})