/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-01: Crate page draft (positive)', () => {
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    const valueTitlePage = faker.lorem.words(5);
   
    before(() => {
        cy.task("createAllData");
    });
    
    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();
        // cy.readFile('./cypress/pool/MOCK_DATA.json').then( (srt)=>{
        //     const min = 0;
        //     const max = 1000;
        //     console.log(srt);
        //     const index = Math.floor((Math.random() * (max - min + 1)) + min)
        //     console.log(index);
        //     itemPage = srt[index];
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