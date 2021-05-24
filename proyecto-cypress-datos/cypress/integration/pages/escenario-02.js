/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-02: Create page draft (aleatorio dinámico)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let valueTitlePage;
   
    before(() => {
        cy.task("createAllData");
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

    it('Validate page in draft', () => {
        pagePage.validateExistPageIn(valueTitlePage);
    })
});