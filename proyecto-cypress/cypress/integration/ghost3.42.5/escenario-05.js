/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/3.42.5/posts-page';
import { GeneralPage } from '../../page-objects/general-page';

describe('Scenario 5 - This scenario is about adding a new author to a post', () => {

    
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let postTitle = '';
    let authorAdded = '';
    
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
        postTitle = postPage.fillPostTitle();
    });

    
    it('Add new author to the post', () => {
        postPage.clickFirstElementPost();
        GeneralPage.stepScreenshot('5');
        postPage.openSettings();
        GeneralPage.stepScreenshot('6');

        cy.wait(100);
        cy.get('[id="author-list"]').click();
        cy.wait(100);
        GeneralPage.stepScreenshot('7');
       
        cy.get('[data-option-index="0"]').then(($span) => {
            let authorName;
            authorName = $span.text().trim();
            cy.get('[data-option-index="0"]').click();
            cy.wait(100);
            postPage.closeSettings();
            postPage.clickOnPublishPost();
            GeneralPage.stepScreenshot('8');
            postPage.returnToPostList();
            GeneralPage.stepScreenshot('9');
            postPage.assertThisPostContainsAuthor(postTitle, authorName);
        });

    });

});