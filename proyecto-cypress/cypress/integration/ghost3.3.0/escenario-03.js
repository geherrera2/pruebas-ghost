/// <reference types="cypress" />
import { LoginPage } from '../../page-objects/login-page';
import { PostPage } from '../../page-objects/posts-page';
import { GeneralPage } from '../../page-objects/general-page';

context('escenario-3', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();
    const generalPage = new GeneralPage();

    it('Eliminar Post', () => {

        loginPage.visitPage();
        generalPage.stepScreenshot('01');
        loginPage.login();
        generalPage.stepScreenshot('02');
        cy.wait(500);
        postPage.navigateToPostsPage();
        generalPage.stepScreenshot('03');
        cy.get('ol.posts-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            postPage.clickFirstElementPost();
            generalPage.stepScreenshot('04');
            postPage.openSettings();
            generalPage.stepScreenshot('05');
            postPage.clickDeletePage();
            cy.get('ol.posts-list').children('.gh-posts-list-item').should('have.length', count - 1);
            generalPage.stepScreenshot('06');
        })
    })
})