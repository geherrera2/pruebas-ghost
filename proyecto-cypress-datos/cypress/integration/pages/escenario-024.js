/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { PageDataPage } from '../../page-objects/page-data-page';

describe('Escenario-22: Create page and Scheduled (negative)', () => {
    const dayjs = require('dayjs')
    const loginPage = new LoginPage();
    const pagePage = new PageDataPage();
    let valueTitlePage;
    let fecha;

    before(() => {
        fecha = dayjs(faker.date.past()).format('YYYY-MM-DD');
        valueTitlePage = faker.lorem.word(5);
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