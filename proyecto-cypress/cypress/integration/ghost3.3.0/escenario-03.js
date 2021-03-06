/// <reference types="cypress" />
import { LoginPage } from '../../page-objects/login-page';
import { PostPage } from '../../page-objects/posts-page';
import { GeneralPage } from '../../page-objects/general-page';

context('escenario-3', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    beforeEach(() => {
        loginPage.visitPage();
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('3');
    });

    it('Create post with title only', () => {
        postPage.clickNewPost();
        GeneralPage.stepScreenshot('4');
        postPage.fillPostTitle();

    });

    it('Eliminar Post', () => {
        cy.get('ol.posts-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            postPage.clickFirstElementPost();
            GeneralPage.stepScreenshot('4');
            postPage.openSettings();
            GeneralPage.stepScreenshot('5');
            postPage.clickDeletePage();
            cy.get('ol.posts-list').children('.gh-posts-list-item').should('have.length', count - 1);
            GeneralPage.stepScreenshot('6');
        })
    });
})