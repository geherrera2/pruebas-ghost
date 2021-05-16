/// <reference types="cypress" />
import {LoginPage} from '../../page-objects/login-page';
import {StaffPage} from '../../page-objects/staff-page';
import {PostPage} from '../../page-objects/posts-page';
import { GeneralPage } from '../../page-objects/general-page';
import faker from 'faker';

context('escenario-15', () => {

    const loginPage = new LoginPage();
    const staffPage = new StaffPage();
    const postPage = new PostPage();
    const generalPage = new GeneralPage();

    it('Invitar Usuario', () => {
        const email = faker.internet.email();
        loginPage.visitPage();
        generalPage.stepScreenshot('01');
        loginPage.login();
        generalPage.stepScreenshot('02');
        staffPage.navigateToStaffPage();
        staffPage.clickInvitePeople();
        generalPage.stepScreenshot('03');
        staffPage.fillEmail(email);
        generalPage.stepScreenshot('04');
        staffPage.send();
        cy.wait(1000);
        postPage.navigateToPostsPage();
        staffPage.navigateToStaffPage();
        generalPage.stepScreenshot('05');
        cy.wait(1000);
        cy.get('.apps-card-app-title').should('contain', email);
    })

  })