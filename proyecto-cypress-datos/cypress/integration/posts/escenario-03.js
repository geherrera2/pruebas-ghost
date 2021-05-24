/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';

describe('Test post creation with title 100 chars - random scenario', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let title = '';

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
    });

    it('Create post with title only', () => {
        title = faker.lorem.words(10).slice(0, 100);
        postPage.clickNewPost();
        postPage.fillPostTitle(title);
    });
    
    it('Test post with this title now exists', () => {
        postPage.assertUpdatePost(title);
    });
});