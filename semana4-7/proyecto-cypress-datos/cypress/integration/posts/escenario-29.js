import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';


context('Edit post title 100 chars publish future date - apriori data pool', () => {
    const dayjs = require('dayjs')
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let title = '';

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
    });

    it('Create post with title of 100 chars', () => {
        postPage.clickNewPost();
        cy.task("getTitle", 100).then(titleToSet => {
            title = titleToSet;
            postPage.fillPostTitle(titleToSet);
        });
    });

    it('Edit post and publish future date', () => {
        cy.task("getParagraph", 1).then(contentBody => {
            postPage.selectPost(title);
            postPage.fillPostBody(contentBody);
            postPage.openPublish();
            cy.task("getDateFuture").then(futureDate => {
                postPage.setDateScheduled(futureDate);
                postPage.publish();
            });
        });
    });

    it('assert scheduled', () => {
        postPage.validateExistPostIn(title,'Scheduled');
    });
  })