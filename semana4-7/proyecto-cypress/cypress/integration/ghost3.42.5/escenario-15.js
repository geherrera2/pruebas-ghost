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

    it('Invitar Usuario', () => {
        const email = faker.internet.email();
        loginPage.visitPage("3.42.5");
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        staffPage.navigateToStaffPage();
        staffPage.clickInvitePeople();
        GeneralPage.stepScreenshot('3');
        staffPage.fillEmail(email);
        GeneralPage.stepScreenshot('4');
        staffPage.send();
        cy.wait(1000);
        postPage.navigateToPostsPage();
        staffPage.navigateToStaffPage();
        GeneralPage.stepScreenshot('5');
        cy.wait(1000);
        cy.get('.apps-card-app-title').should('contain', email);
    })

  })