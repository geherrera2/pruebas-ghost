/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-09: Create page empty title draft (positive)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    
    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();
    });

    it('Create page with title only', () => {
        pagePage.clickNewPage();
        pagePage.fillPageContent(' ');
    })

    it('Validate page in draft', () => {
        pagePage.validateExistPageIn('(Untitled)');
    })
});