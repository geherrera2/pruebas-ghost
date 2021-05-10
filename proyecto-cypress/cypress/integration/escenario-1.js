/// <reference types="cypress" />

import {LoginPage} from '../page-objects/login-page';
import {PostPage} from '../page-objects/posts-page';

describe('This scenario is to test post creation', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let title = '';

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
    });

    it('Create post with title only', () => {
        postPage.clickNewPost();
        title = postPage.fillPostTitle();
    });

    
    it('Test post with this title now exists', () => {
        postPage.assertUpdatePost(title);
    });
});