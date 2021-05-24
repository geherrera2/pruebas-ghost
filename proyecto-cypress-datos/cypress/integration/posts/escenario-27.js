import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';


context('Edit post title 100 chars with 500 paragraphs in the content - random data pool', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let title = '';

    before(() => {
        cy.task("createAllData");
    });

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

    it('Edit post title 100 chars', () => {
        cy.task("getTitle", 100).then(titleToSet => {
            postPage.selectPost(title);
            title = titleToSet;
            postPage.updateTitlePost(titleToSet);
            cy.task("getParagraph", 500).then(contentBody => {
                postPage.fillPostBody(contentBody);
                postPage.openPublish();
                postPage.publish();
            });
        });
    });

    it('assert new title', () => {
        postPage.validateExistPostIn(title,'Published');
    });
  })