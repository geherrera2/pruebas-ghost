/// <reference types="cypress" />

import {LoginPage} from '../page-objects/login-page';
import {PostPage} from '../page-objects/posts-page';

describe('This scenario is to test post creation', () => {
    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('login to Ghost', () => {
        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPostsPage();
        postPage.clickNewPost();
        postPage.fillPostTitle();
    })
});