import { LoginPage } from '../../page-objects/login-page';
import { DesignPage } from '../../page-objects/design-page';
import faker from 'faker';
import { GeneralPage } from '../../page-objects/general-page';

context('Scenario 20 - Design - Delete Menu', () => {

    it('Delete Menu', () => {
        const menu = faker.lorem.word();

        const loginPage = new LoginPage();
        const designPage = new DesignPage();

        loginPage.visitPage();
        GeneralPage.stepScreenshot('01');
        loginPage.login();
        GeneralPage.stepScreenshot('02');
        designPage.navigateToDesignPage();
        GeneralPage.stepScreenshot('03');
        cy.get('#settings-navigation input').then(listing => {
            designPage.fillMenu(menu);
            GeneralPage.stepScreenshot('04');
            designPage.save();
            GeneralPage.stepScreenshot('05');
            designPage.deleteMenu(menu);
            GeneralPage.stepScreenshot('06');
            cy.get('#settings-navigation input').should('have.length', listing.length)
            GeneralPage.stepScreenshot('07');
        });
    })

})