import { LoginPage } from '../../page-objects/login-page';
import { PostPage } from '../../page-objects/posts-page';
import faker from 'faker';
import { GeneralPage } from '../../page-objects/general-page';

context('Scenario 2 - Publish Post', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('Publish post', () => {
        const postTitle = faker.lorem.words();

        loginPage.visitPage();
        GeneralPage.stepScreenshot('01');
        loginPage.login();
        GeneralPage.stepScreenshot('02');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('03');
        postPage.clickNewPost();
        GeneralPage.stepScreenshot('04');
        postPage.clickOnPostTitle();
        GeneralPage.stepScreenshot('05');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('06');
        postPage.clickFirstElementPost();
        GeneralPage.stepScreenshot('07');
        postPage.updateTitlePost(postTitle);
        GeneralPage.stepScreenshot('08');
        postPage.clickOnPublishPost();
        GeneralPage.stepScreenshot('09');
        postPage.assertPostPublishedV3_42_5();
        GeneralPage.stepScreenshot('10');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('11');
    })
})