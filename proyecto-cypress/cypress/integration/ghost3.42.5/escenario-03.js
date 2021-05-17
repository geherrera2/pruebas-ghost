/// <reference types="cypress" />
import { LoginPage } from '../../page-objects/login-page';
import { PostPage } from '../../page-objects/posts-page';
import { GeneralPage } from '../../page-objects/general-page';

context('escenario-3', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('Eliminar Post', () => {
        loginPage.visitPage();
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        postPage.navigateToPostsPage();
        cy.get('ol.posts-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            postPage.clickFirstElementPost();
            GeneralPage.stepScreenshot('3');
            postPage.openSettings();
            GeneralPage.stepScreenshot('4');
            postPage.clickDeletePage();
            cy.get('ol.posts-list').children('.gh-posts-list-item').should('have.length', count - 1);
            GeneralPage.stepScreenshot('6');
        })
    });
})