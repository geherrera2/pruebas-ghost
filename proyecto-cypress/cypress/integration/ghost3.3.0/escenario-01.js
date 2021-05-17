/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import { GeneralPage } from '../../page-objects/general-page';

describe('This scenario is to test post creation', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let title = '';

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
        title = postPage.fillPostTitle();

    });

    
    it('Test post with this title now exists', () => {
        postPage.assertUpdatePost(title);
    });
});