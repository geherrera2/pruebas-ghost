import { LoginPage } from '../../page-objects/login-page';
import { DesignPage } from '../../page-objects/design-page';
import faker from 'faker';

context('Scenario 20 - Design - Delete Menu', () => {

    it('Delete Menu', () => {
        const menu = faker.lorem.word();

        const loginPage = new LoginPage();
        const designPage = new DesignPage();

        loginPage.visitPage();
        loginPage.login();
        designPage.navigateToDesignPage();
        cy.get('#settings-navigation input').then(listing => {
            designPage.fillMenu(menu);
            designPage.save();
            designPage.deleteMenu(menu);
            cy.get('#settings-navigation input').should('have.length', listing.length)
        });
    })

})