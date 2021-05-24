/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-22: Create page and Scheduled (negative)', () => {

    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let valueTitlePage;
    let fecha;
    // const todaysDate = Cypress.moment().format('MMM DD, YYYY')

    before(() => {
        cy.task("getDatePass").then(resp => {
            fecha = resp;
        });
        cy.task("getTitle").then(resp => {
            valueTitlePage = resp;
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
        pagePage.openPublish();
        pagePage.setDateScheduled(fecha);
        pagePage.publish();
        pagePage.returnList('Pages');
        pagePage.validateNotExistPageIn(valueTitlePage,'Scheduled' );
       
    })
});