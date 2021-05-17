/// <reference types="cypress" />
import {LoginPage} from '../../page-objects/login-page';
import {StaffPage} from '../../page-objects/staff-page';
import {PostPage} from '../../page-objects/posts-page';
import { GeneralPage } from '../../page-objects/general-page';
import faker from 'faker';

context('escenario-17 revoke invitation to user', () => {

    const loginPage = new LoginPage();
    const staffPage = new StaffPage();
    const postPage = new PostPage();

    beforeEach(() => {
        loginPage.visitPage("3.42.5");
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        staffPage.navigateToStaffPage();
        GeneralPage.stepScreenshot('3');
    });

    it('Invite new user', () => {
        let email = faker.internet.email();
        staffPage.clickInvitePeople();
        GeneralPage.stepScreenshot('4');
        staffPage.fillEmail(email);
        GeneralPage.stepScreenshot('5');
        staffPage.send();
        cy.wait(1000);
        GeneralPage.stepScreenshot('6');
    })

    it('revoke invite to user', () => {
        let staffUsers = Cypress.$('.apps-grid-cell').length;
        staffPage.clickRevoke();
        cy.wait(1000);
        GeneralPage.stepScreenshot('7');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('8');
        staffPage.navigateToStaffPage();
        cy.wait(1000);
        GeneralPage.stepScreenshot('9');
        cy.get('.apps-grid-cell').should('have.length', staffUsers - 1);
    })

  })