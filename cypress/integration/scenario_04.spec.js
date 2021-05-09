import { LoginPage } from '../page-objects/login-page';
import { PostPage } from '../page-objects/posts-page';
import faker from 'faker';

context('Scenario 2 - Publish Post', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('Create post', () => {
        const pageTitle = faker.lorem.text();

        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
        postPage.clickNewPost();
        postPage.clickOnPostTitle();
        postPage.navigateToPostsPage();
        postPage.clickFirstElementPost();
        postPage.updateTitlePage(pageTitle);
        postPage.clickOnPublishPost();
        postPage.navigateToPostsPage();
        // postPage.assertPostPublished();
    })
})