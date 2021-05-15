import { LoginPage } from '../../page-objects/login-page';
import { PostPage } from '../../page-objects/posts-page';
import faker from 'faker';

context('Scenario 2 - Publish Post', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('Publish post', () => {
        const postTitle = faker.lorem.words();

        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
        postPage.clickNewPost();
        postPage.clickOnPostTitle();
        postPage.navigateToPostsPage();
        postPage.clickFirstElementPost();
        postPage.updateTitlePost(postTitle);
        postPage.clickOnPublishPost();
        postPage.assertPostPublishedV3_42_5();
        postPage.navigateToPostsPage();
    })
})