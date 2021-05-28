/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';

describe('Test post creation with title 1998 chars - random scenario', () => {
    
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
        title = faker.lorem.words(1000).slice(0, 1998);
        postPage.fillPostTitle(title);
    });
    
    it('Test post with this title now exists', () => {
        postPage.assertUpdatePost(title);
    });
});