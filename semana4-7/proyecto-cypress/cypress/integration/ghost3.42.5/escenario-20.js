import { LoginPage } from '../../page-objects/login-page';
import { DesignPage } from '../../page-objects/design-page';
import faker from 'faker';
import { GeneralPage } from '../../page-objects/general-page';

context('Scenario 20 - Design - Delete Menu', () => {

    it('Delete Menu', () => {
        const menu = faker.lorem.word();

        const loginPage = new LoginPage();
        const designPage = new DesignPage();

        loginPage.visitPage("3.42.5");
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        designPage.navigateToDesignPage();
        GeneralPage.stepScreenshot('3');
        cy.get('#settings-navigation input').then(listing => {
            designPage.fillMenu(menu);
            GeneralPage.stepScreenshot('4');
            designPage.save();
            GeneralPage.stepScreenshot('5');
            designPage.deleteMenu(menu);
            GeneralPage.stepScreenshot('6');
            cy.get('#settings-navigation input').should('have.length', listing.length)
            GeneralPage.stepScreenshot('7');
        });
    })

})