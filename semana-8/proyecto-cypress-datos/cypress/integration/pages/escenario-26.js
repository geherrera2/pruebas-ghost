/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-26: Update content page and change status Scheduled (aleatorio dinámico)', () => {
    const dayjs = require('dayjs')
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let fecha;
    let valueTitlePage;
    let valueContentPage;
   
    before(() => {
        cy.task("createAllData");
        cy.task("getDateFuture").then(resp => {
            fecha = resp;
        });
        cy.task("getTitle", 100).then(title => {
            valueTitlePage = title;
        });
        cy.task("getParagraph").then(resp => {
            valueContentPage = resp;
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
        pagePage.setDateScheduled(fecha);
        pagePage.publish();
        pagePage.returnList('Pages');
        pagePage.validateExistPageIn(valueTitlePage,'Scheduled' );
       
    })
});