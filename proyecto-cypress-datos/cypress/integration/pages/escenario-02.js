/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-01: Crate page draft (negative)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    const valueTitlePage = faker.lorem.words(2100);
    let itemPage = {
        title: ''
    };

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();

        //  cy.readFile('./cypress/pool/apriori.json').then( (srt)=>{
        //     console.log(srt);
        //     itemPage.title = srt[0].title;
        // } );
    });

    it('Create page with title only', () => {
        pagePage.clickNewPage();
        pagePage.fillPageTitle(valueTitlePage);
        pagePage.returnList('Pages');
    })

    it('Validate page in draft', () => {
        pagePage.validateExistPageInDraff(valueTitlePage);
    })
});