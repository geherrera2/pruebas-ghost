/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-09: Update content page draft (aleatorio)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let valueTitlePage;
    let valueContentPage;
   
    before(() => {
        valueTitlePage = faker.lorem.words(10);
        valueContentPage = faker.lorem.words(10);
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

    it('Update content page in draft', () => {
        pagePage.selectPage(valueTitlePage);
        pagePage.fillPageContent(valueContentPage);
        pagePage.returnList('Pages');
    })

    it('Validate content', ()=>{
        pagePage.navigateToPagesPage();
        pagePage.selectPage(valueTitlePage);
        pagePage.validateExistConentPage(valueContentPage);
    })
});