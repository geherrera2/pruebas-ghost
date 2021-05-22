
import {LoginPage} from '../../page-objects/login-page';
import {PagePage} from '../../page-objects/page-page';
import { GeneralPage } from '../../page-objects/general-page';
import faker from 'faker';

context('escenario-10:Publicar Page', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();
    let valueTitlePage = '';

    it('Crear page with title only', () => {
        loginPage.visitPage();
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('2');
        valueTitlePage = faker.lorem.words(5);
        cy.get('ol.gh-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            pagePage.clickNewPage();
            GeneralPage.stepScreenshot('3');
            pagePage.fillPageTitle(valueTitlePage);
            pagePage.returnList();
        })
      
    })

    it('Publish page', () => {
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();

        pagePage.selectPage(valueTitlePage);
        GeneralPage.stepScreenshot('4',500);
        pagePage.openPublish();
        GeneralPage.stepScreenshot('5',500);
        pagePage.publish();
        GeneralPage.stepScreenshot('6',500);
        pagePage.returnList();
        GeneralPage.stepScreenshot('7',500);
        pagePage.validatePage(valueTitlePage);
    })

  })