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
        GeneralPage.stepScreenshot('step_01');
        loginPage.login();
        GeneralPage.stepScreenshot('step_02');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('step_03');
        postPage.clickNewPost();
        GeneralPage.stepScreenshot('step_04');
        postPage.clickOnPostTitle();
        GeneralPage.stepScreenshot('step_05');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('step_06');
        postPage.clickFirstElementPost();
        GeneralPage.stepScreenshot('step_07');
        postPage.updateTitlePost(postTitle);
        GeneralPage.stepScreenshot('step_08');
        postPage.clickOnPublishPost();
        GeneralPage.stepScreenshot('step_09');
        postPage.assertPostPublishedV3_42_5();
        GeneralPage.stepScreenshot('step_10');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('step_11');
    })
})