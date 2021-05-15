/// <reference types="cypress" />
import { LoginPage } from '../../page-objects/login-page';
import { PostPage } from '../../page-objects/posts-page';

context('escenario-3', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('Eliminar Post', () => {

        loginPage.visitPage("3.42.5");
        loginPage.login();
        cy.wait(500);
        postPage.navigateToPostsPage();
        cy.get('ol.posts-list').then(listing => {
            let count = Cypress.$('.gh-posts-list-item').length;
            postPage.clickFirstElementPost();
            postPage.openSettings();
            postPage.clickDeletePage();
            cy.get('ol.posts-list').children('.gh-posts-list-item').should('have.length', count - 1)
        })
    })
})