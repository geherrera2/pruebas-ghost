import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 04 - General Settings - Pool de datos a-priori', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit Used in your theme, meta data and search results', () => {
        let description = '';
        cy.task("getParagraph").then(paragraph => {
            description = paragraph;
            loginPage.visitPage();
            loginPage.login();
            settingsPage.navigateToGeneralSettings();
            settingsPage.expandTitleAndDescription();
            settingsPage.updateSiteDescription(description);
            settingsPage.saveSetting();
            settingsPage.validateSave();
        });
    })
})