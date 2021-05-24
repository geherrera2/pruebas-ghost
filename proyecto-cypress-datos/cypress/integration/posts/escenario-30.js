import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';


context('Edit post title 100 chars publish future date - random scenario', () => {
    const dayjs = require('dayjs')
    const loginPage = new LoginPage();
    const postPage = new PostPage();
    let title = '';
    let contentBody = ''
    const futureDate = dayjs(faker.date.future()).format('YYYY-MM-DD');

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
    });

    it('Create post with title of 100 chars', () => {
        postPage.clickNewPost();
        title = faker.lorem.words(10).slice(0, 100);
        postPage.fillPostTitle(title);
    });

    it('Edit post and publish future date', () => {
        contentBody = faker.lorem.paragraphs(1);
        postPage.selectPost(title);
        postPage.fillPostBody(contentBody);
        postPage.openPublish();
        postPage.setDateScheduled(futureDate);
        postPage.publish();
    });

    it('assert scheduled', () => {
        postPage.validateExistPostIn(title,'Scheduled');
    });
  })