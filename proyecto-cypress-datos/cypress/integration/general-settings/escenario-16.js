import { LoginPage } from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page'

context('Scenario 16 - General Settings - Pool de datos a-priori', () => {

    const loginPage = new LoginPage();
    const settingsPage = new SettingPage();

    it('Edit Twitter description', () => {
        let description = '';
        cy.task("getParagraph").then(paragraph => {
            description = paragraph;
            loginPage.visitPage();
            loginPage.login();
            settingsPage.navigateToGeneralSettings();
            settingsPage.expandTwitterCard();
            settingsPage.updateTwitterDescription(description);
            settingsPage.saveSetting();
            settingsPage.validateSave();
        });
    })
})