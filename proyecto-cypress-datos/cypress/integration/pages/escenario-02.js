/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-01: Crate page draft (negative)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    const valueTitlePage = faker.lorem.words(1000);


    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();
    });

    it('Create page with title only', () => {
        pagePage.clickNewPage();
        pagePage.test(valueTitlePage);
        // pagePage.returnList('Pages');
    })

    // it('Validate page in draft', () => {
    //     pagePage.validateExistPageInDraff(valueTitlePage);
    // })
});