import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';


context('Edit post title from 100 to 1999 chars', () => {

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
        cy.wait(500);
        postPage.clickFirstElementPost();
        cy.task("getTitle", 1999).then(titleToSet => {
            title = titleToSet;
            postPage.updateTitlePost(titleToSet);
            postPage.clickUpdatePost();
            postPage.navigateToPostsPage();
        });
    });

    it('assert new title', () => {
        postPage.assertUpdatePost(title);
    })
  })