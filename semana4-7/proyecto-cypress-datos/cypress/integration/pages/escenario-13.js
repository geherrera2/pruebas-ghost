/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-13: Update content page and publish (apriori)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let valueTitlePage;
    let valueContentPage;
   
    before(() => {
        cy.task("getTitle", 100).then(title => {
            valueTitlePage = title;
        });

        cy.task("getParagraph",500).then(resp => {
            valueContentPage = resp;
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
        pagePage.fillPageContent(valueContentPage)
        pagePage.wait(1000)
        pagePage.openPublish();
        pagePage.publish();
        pagePage.returnList('Pages');
        pagePage.validateExistPageIn(valueTitlePage,'Published' );
       
    })
});