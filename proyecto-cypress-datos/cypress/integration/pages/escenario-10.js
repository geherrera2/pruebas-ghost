/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-10: Create page and publish (a-priori)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let valueTitlePage;
   
    before(() => {
        cy.task("getTitle").then(title => {
            valueTitlePage = title;
        });
    });
    
    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();
    });

    it('Create page with title only', () => {
        pagePage.clickNewPage();
        pagePage.fillPageTitle(valueTitlePage);
        pagePage.returnList('Pages');
    })

    it('Publish page', () => {

        pagePage.selectPage(valueTitlePage);
        pagePage.openPublish();
        pagePage.publish();
        pagePage.returnList('Pages');
        pagePage.validateExistPageIn(valueTitlePage,'Published' );
       
    })
});