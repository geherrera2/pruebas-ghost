/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-16: Update content page one character and publish (apriori)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let valueTitlePage;
    let valueContentPage;
   
    before(() => {
        cy.task("getTitle", 1).then(title => {
            valueTitlePage = title;
            valueContentPage = title;
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