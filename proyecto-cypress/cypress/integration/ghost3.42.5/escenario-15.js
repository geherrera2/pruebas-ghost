/// <reference types="cypress" />
import {LoginPage} from '../../page-objects/login-page';
import {StaffPage} from '../../page-objects/staff-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';

context('escenario-15', () => {

    const loginPage = new LoginPage();
    const staffPage = new StaffPage();
    const postPage = new PostPage();

    it('Invitar Usuario', () => {
        const email = faker.internet.email();
        loginPage.visitPage();
        loginPage.login();
        staffPage.navigateToStaffPage();
        staffPage.clickInvitePeople();
        staffPage.fillEmail(email);
        staffPage.send();
        cy.wait(1000);
        postPage.navigateToPostsPage();
        staffPage.navigateToStaffPage();
        cy.wait(1000);
        cy.get('.apps-card-app-title').should('contain', email);
    })

  })