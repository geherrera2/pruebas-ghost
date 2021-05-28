import { LoginPage } from '../../page-objects/login-page';
import { PostPage } from '../../page-objects/posts-page';
import faker from 'faker';
import { GeneralPage } from '../../page-objects/general-page';

context('Scenario 2 - Publish Post', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('Publish post', () => {
        const postTitle = faker.lorem.words();

        loginPage.visitPage("3.42.5");
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('3');
        postPage.clickNewPost();
        GeneralPage.stepScreenshot('4');
        postPage.clickOnPostTitle();
        GeneralPage.stepScreenshot('5');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('6');
        postPage.clickFirstElementPost();
        GeneralPage.stepScreenshot('7');
        postPage.updateTitlePost(postTitle);
        GeneralPage.stepScreenshot('8');
        postPage.clickOnPublishPost();
        GeneralPage.stepScreenshot('9');
        postPage.assertPostPublishedV3_42_5();
        GeneralPage.stepScreenshot('10');
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('11');
    })
})