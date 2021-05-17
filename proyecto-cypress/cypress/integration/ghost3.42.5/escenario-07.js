
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
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('3');
        cy.get('ol.gh-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            pagePage.clickNewPage();
            GeneralPage.stepScreenshot('4');
            pagePage.fillPageTitle(valueTitlePage);
            pagePage.returnList();
            pagePage.clickFirstElementPage
            pagePage.fillPageBody(valueBodyPage);
            GeneralPage.stepScreenshot('5');
            pagePage.openPublish();
            GeneralPage.stepScreenshot('6');
            pagePage.publish();
            GeneralPage.stepScreenshot('7');
            pagePage.returnList();
            cy.wait(1000);
            cy.get('ol.gh-list').children('.gh-posts-list-item').should('have.length', count+1);
        })
    })

  })