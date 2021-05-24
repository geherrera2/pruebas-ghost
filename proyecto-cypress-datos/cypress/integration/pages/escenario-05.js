/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-02: Create page title (size 1998) draft (negative)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let valueTitlePage;
    let sizeListPage = 0;

    before(() => {
        cy.task("createAllData");
        cy.task("getTitle", 1998).then(title => {
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
        pagePage.validateNotExistPageIn(valueTitlePage);
    })
});