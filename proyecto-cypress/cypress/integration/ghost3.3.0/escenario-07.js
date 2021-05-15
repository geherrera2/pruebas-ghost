
import {LoginPage} from '../page-objects/login-page';
import {PagePage} from '../page-objects/page-page';
import faker from 'faker';

context('escenario-7', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();

    it('Crear Page', () => {
        const valueTitlePage = faker.lorem.words(5);
        const valueBodyPage = faker.lorem.word();
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();
        cy.get('ol.gh-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            pagePage.clickNewPage();
            pagePage.fillPageTitle(valueTitlePage);
            pagePage.returnList();
            pagePage.clickFirstElementPage
            pagePage.fillPageBody(valueBodyPage);
            pagePage.openPublish();
            pagePage.publish();
            pagePage.returnList();
            cy.wait(1000);
            cy.get('ol.gh-list').children('.gh-posts-list-item').should('have.length', count+1);
        })
    })

  })