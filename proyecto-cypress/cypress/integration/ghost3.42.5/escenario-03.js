/// <reference types="cypress" />
import { LoginPage } from '../../page-objects/login-page';
import { PostPage } from '../../page-objects/posts-page';
import { GeneralPage } from '../../page-objects/general-page';

context('escenario-3', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();
    it('Eliminar Post', () => {

        loginPage.visitPage();
        GeneralPage.stepScreenshot('01');
        loginPage.login();
        GeneralPage.stepScreenshot('02');
        cy.wait(1000);
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('03');
        cy.get('ol.posts-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            postPage.clickFirstElementPost();
            GeneralPage.stepScreenshot('04');
            postPage.openSettings();
            GeneralPage.stepScreenshot('05');
            postPage.clickDeletePage();
            cy.get('ol.posts-list').children('.gh-posts-list-item').should('have.length', count - 1)
            GeneralPage.stepScreenshot('06');
        })
    })
})