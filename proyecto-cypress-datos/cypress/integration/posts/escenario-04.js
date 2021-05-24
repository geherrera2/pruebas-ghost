/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';

describe('Test post creation with special characters', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let title = '';
    faker.locale = 'ru';

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
    });

    it('Create post with title only', () => {
        title = faker.lorem.words(5);
        postPage.clickNewPost();
        postPage.fillPostTitle(title);
    });
    
    it('Test post with this title now exists', () => {
        postPage.assertUpdatePost(title);
    });
});