import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';

context('Edit post title 100 to 1999 with 100 paragraphs in the content - apriori data pool', () => {

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

    it('Edit post from 100 chars to 1999', () => {
        cy.task("getTitle", 1999).then(titleToSet => {
            postPage.selectPost(title);
            title = titleToSet;
            postPage.updateTitlePost(titleToSet);
            cy.task("getParagraph", 100).then(contentBody => {
                postPage.fillPostBody(contentBody);
                postPage.openPublish();
                postPage.publish();
            });
        });
    });

    it('assert new title', () => {
        postPage.assertUpdatePost(title);
    })
  })