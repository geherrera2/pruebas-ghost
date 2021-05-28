import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';


context('Edit post title 100 chars with 100 paragraphs in the content - random scenario', () => {

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
        title = faker.lorem.words(10).slice(0, 100);
        postPage.fillPostTitle(titleToSet);
    });

    it('Edit post title 100 chars', () => {
        postPage.selectPost(title);

        title = faker.lorem.words(10).slice(0, 100);
        contentBody = faker.lorem.paragraphs(100);

        postPage.updateTitlePost(title);
        postPage.fillPostBody(contentBody);
        postPage.openPublish();
        postPage.publish();
    });

    it('assert new title', () => {
        postPage.validateExistPostIn(title,'Published');
    });
  })