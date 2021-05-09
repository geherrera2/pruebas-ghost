/// <reference types="cypress" />
import {LoginPage} from '../page-objects/login-page';
import { PagePage } from '../page-objects/page-page';
import faker from 'faker';

describe('This is to test the elimination of a page', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();
    let pageTitle = '';

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPage('Pages');
    });
    

    it('Create a new page', () => {
        pagePage.clickNewPage();
        pageTitle = faker.lorem.sentence();
        pagePage.fillPageTitle(pageTitle);
        pagePage.returnList();
    });

    it('Delete previously created page', () => {
        let numberPagesBeforeDelete = Cypress.$('.gh-posts-list-item').length;
        pagePage.clickFirstElementPage();
        pagePage.openSettings();
        pagePage.clickDeletePage();
        pagePage.confirmDeletePage();
        pagePage.returnList();
        cy.get('ol.gh-list').children('.gh-posts-list-item').should('have.length', numberPagesBeforeDelete - 1);
    });

  })