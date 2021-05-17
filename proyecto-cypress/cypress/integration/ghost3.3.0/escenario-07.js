
import {LoginPage} from '../../page-objects/login-page';
import {PagePage} from '../../page-objects/page-page';
import { GeneralPage } from '../../page-objects/general-page';
import faker from 'faker';

context('escenario-7', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();

    it('Crear Page', () => {
        const valueTitlePage = faker.lorem.words(5);
        const valueBodyPage = faker.lorem.word();
        loginPage.visitPage();
        GeneralPage.stepScreenshot('01');
        loginPage.login();
        GeneralPage.stepScreenshot('02');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('03');
        cy.get('ol.gh-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            pagePage.clickNewPage();
            GeneralPage.stepScreenshot('04');
            pagePage.fillPageTitle(valueTitlePage);
            pagePage.returnList();
            pagePage.clickFirstElementPage
            pagePage.fillPageBody(valueBodyPage);
            GeneralPage.stepScreenshot('05');
            pagePage.openPublish();
            GeneralPage.stepScreenshot('06');
            pagePage.publish();
            GeneralPage.stepScreenshot('07');
            pagePage.returnList();
            cy.wait(1000);
            cy.get('ol.gh-list').children('.gh-posts-list-item').should('have.length', count+1);
            GeneralPage.stepScreenshot('08');
        })
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

  })