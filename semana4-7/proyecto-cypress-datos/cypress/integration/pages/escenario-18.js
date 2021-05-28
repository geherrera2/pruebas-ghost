/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-18: Update content page one character and publish (aleatorio)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let valueTitlePage;
    let valueContentPage;
   
    before(() => {
        valueTitlePage = faker.lorem.word(2);
        valueContentPage = faker.lorem.word(1);
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