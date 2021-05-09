/// <reference types="cypress" />
import {LoginPage} from '../page-objects/login-page';
import {PagePage} from '../page-objects/page-page';
import faker from 'faker';

context('escenario-11', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();

    it('Asociar un tag a un page', () => {
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();
        pagePage.clickFirstElementPage();
        pagePage.openSettings();
        pagePage.addTag();
        pagePage.closeSettings();
        pagePage.openPublish();
        pagePage.publish();
        pagePage.returnList();
        cy.wait(1000);
        //cy.get('ol.gh-list').children('.gh-posts-list-item').should('have.length', count+1);
    })

  })