/// <reference types="cypress" />

import {LoginPage} from '../page-objects/login-page';
import {PostPage} from '../page-objects/posts-page';

describe('This scenario is to test post creation', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let title = '';

    it('Create post with title only', () => {
        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
        postPage.clickNewPost();
        title = postPage.fillPostTitle();
    });

    
    it('Test post with this title now exists', () => {
        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
        postPage.assertUpdatePost(title);
    });
});