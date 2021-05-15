/// <reference types="cypress" />
import { LoginPage } from '../../page-objects/login-page';
import { DesignPage } from '../../page-objects/design-page';
import faker from 'faker';

context('escenario-19', () => {

    const loginPage = new LoginPage();
    const designPage = new DesignPage();

    it('Agregar Menu Primario', () => {
        const menu = faker.lorem.word();
        loginPage.visitPage();
        loginPage.login();
        designPage.navigateToDesignPage();
        cy.get('#settings-navigation input').then(listing => {
            designPage.fillMenu(menu);
            designPage.save();
            cy.wait(1000);
            cy.get('#settings-navigation input').should('have.length', listing.length + 2)
        })
    })

})