
import {LoginPage} from '../../page-objects/login-page';
import {PagePage} from '../../page-objects/page-page';
import { GeneralPage } from '../../page-objects/general-page';
import faker from 'faker';

context('escenario-7', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();
    const generalPage = new GeneralPage();

    it('Crear Page', () => {
        const valueTitlePage = faker.lorem.words(5);
        const valueBodyPage = faker.lorem.word();
        loginPage.visitPage();
        generalPage.stepScreenshot('01');
        loginPage.login();
        generalPage.stepScreenshot('02');
        pagePage.navigateToPagesPage();
        generalPage.stepScreenshot('03');
        cy.get('ol.gh-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            pagePage.clickNewPage();
            generalPage.stepScreenshot('04');
            pagePage.fillPageTitle(valueTitlePage);
            pagePage.returnList();
            pagePage.clickFirstElementPage
            pagePage.fillPageBody(valueBodyPage);
            generalPage.stepScreenshot('05');
            pagePage.openPublish();
            generalPage.stepScreenshot('06');
            pagePage.publish();
            generalPage.stepScreenshot('07');
            pagePage.returnList();
            cy.wait(1000);
            cy.get('ol.gh-list').children('.gh-posts-list-item').should('have.length', count+1);
            generalPage.stepScreenshot('08');
        })
    })

  })