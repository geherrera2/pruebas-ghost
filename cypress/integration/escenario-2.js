/// <reference types="cypress" />
import {LoginPage} from '../page-objects/login-page';
import {PostPage} from '../page-objects/posts-page';
import faker from 'faker';

context('escenario-2', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('Update title page', () => {
        const valueTitlePage = faker.lorem.sentence();

        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPostsPage();
        postPage.clickFirstElementPage();
        postPage.updateTitlePage(valueTitlePage);
        postPage.clickUpdatePage();
        loginPage.navigateToPostsPage();
        postPage.assertUpdatePage(valueTitlePage);
        loginPage.logOut();
    
    })
  })