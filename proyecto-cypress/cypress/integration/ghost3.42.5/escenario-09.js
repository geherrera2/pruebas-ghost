/// <reference types="cypress" />
import {LoginPage} from '../../page-objects/login-page';
import { PagePage } from '../../page-objects/page-page';
import faker from 'faker';
import { GeneralPage } from '../../page-objects/general-page';

describe('Scenario 9 - This is to test the elimination of a page', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();
    let pageTitle = '';

    beforeEach(() => {
        loginPage.visitPage("3.42.5");
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        loginPage.navigateToPage('Pages');
        GeneralPage.stepScreenshot('3');
    });
    

    it('Create a new page', () => {
        pagePage.clickNewPage();
        GeneralPage.stepScreenshot('4');
        pageTitle = faker.lorem.sentence();
        pagePage.fillPageTitle(pageTitle);
        GeneralPage.stepScreenshot('5');
        pagePage.returnList();
        GeneralPage.stepScreenshot('6');
    });

    it('Delete previously created page', () => {
        let numberPagesBeforeDelete = Cypress.$('.gh-posts-list-item').length;
        pagePage.clickFirstElementPage();
        pagePage.openSettings();
        pagePage.clickDeletePage();
        GeneralPage.stepScreenshot('7');
        pagePage.confirmDeletePage();
        pagePage.returnList();
        cy.get('ol.gh-list').children('.gh-posts-list-item').should('have.length', numberPagesBeforeDelete - 1);
    });

  })