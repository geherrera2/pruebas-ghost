import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';


context('Edit post title from 100 to 1999 chars - random scenario', () => {

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
        postPage.fillPostTitle(title);
    });

    it('Edit post from 100 chars to 1999', () => {
        title = faker.lorem.words(1000).slice(0, 1999);

        postPage.clickFirstElementPost();
        postPage.updateTitlePost(title);
        postPage.openPublish();
        postPage.publish();
        postPage.navigateToPostsPage();
    });

    it('assert new title', () => {
        postPage.assertUpdatePost(title);
    })
  })