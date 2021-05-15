/// <reference types="cypress" />

import {LoginPage} from '../page-objects/login-page';
import {PostPage} from '../page-objects/posts-page';

describe('Scenario 5 - This scenario is about adding a new author to a post', () => {
    
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let postTitle = '';
    let authorAdded = '';
    
    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
    });

    it('Create post with title only', () => {
        postPage.clickNewPost();
        postTitle = postPage.fillPostTitle();
    });

    
    it('Add new author to the post', () => {
        postPage.clickFirstElementPost();
        postPage.openSettings();

        cy.wait(100);
        cy.get('[id="author-list"]').click();
        cy.wait(100);
       
        cy.get('[data-option-index="0"]').then(($span) => {
            let authorName;
            authorName = $span.text().trim();
            cy.get('[data-option-index="0"]').click();
            cy.wait(100);
            postPage.closeSettings();
            postPage.clickOnPublishPost();
            postPage.returnToPostList();
            postPage.assertThisPostContainsAuthor(postTitle, authorName);
        });

    });

});