/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';

describe('Test post creation with title 1998 chars - random data pool', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let title = '';

    before(() => {
        cy.task("createAllData");
    });

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
    });

    it('Create post with title only', () => {
        postPage.clickNewPost();
        cy.task("getTitle", 1998).then(titleToSet => {
            title = titleToSet;
            postPage.fillPostTitle(titleToSet);
        });
    });
    
    it('Test post with this title now exists', () => {
        postPage.assertUpdatePost(title);
    });
});