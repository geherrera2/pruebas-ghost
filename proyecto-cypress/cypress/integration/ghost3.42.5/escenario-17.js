/// <reference types="cypress" />
import {LoginPage} from '../../page-objects/login-page';
import {StaffPage} from '../../page-objects/staff-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';

context('escenario-17 revoke invitation to user', () => {

    const loginPage = new LoginPage();
    const staffPage = new StaffPage();
    const postPage = new PostPage();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        staffPage.navigateToStaffPage();
    });

    it('Invite new user', () => {
        let email = faker.internet.email();
        staffPage.clickInvitePeople();
        staffPage.fillEmail(email);
        staffPage.send();
        cy.wait(1000);
    })

    it('revoke invite to user', () => {
        let staffUsers = Cypress.$('.apps-grid-cell').length;
        staffPage.clickRevoke();
        cy.wait(1000);
        postPage.navigateToPostsPage();
        staffPage.navigateToStaffPage();
        cy.wait(1000);
        cy.get('.apps-grid-cell').should('have.length', staffUsers - 1);
    })

  })