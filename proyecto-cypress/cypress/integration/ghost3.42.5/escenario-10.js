
import {LoginPage} from '../page-objects/login-page';
import {PagePage} from '../page-objects/page-page';
import faker from 'faker';

context('escenario-10:Publicar Page', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();
    let valueTitlePage = '';

    it('Crear page with title only', () => {
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();
        valueTitlePage = faker.lorem.words(5);
        cy.get('ol.gh-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            pagePage.clickNewPage();
            pagePage.fillPageTitle(valueTitlePage);
            pagePage.returnList();
        })
      
    })

    it('Publish page', () => {
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();

        pagePage.selectPage(valueTitlePage);
        pagePage.openPublish();
        pagePage.publish();
        pagePage.returnList();
        pagePage.validatePage(valueTitlePage);
    })

  })