/// <reference types="cypress" />
import {LoginPage} from '../page-objects/login-page';
import {PostPage} from '../page-objects/posts-page';
import { TagPage } from '../page-objects/tag-page';
import faker from 'faker';

context('escenario-2', () => {
    let valueNameTag = '';

    it('Crear Tag', () => {
        valueNameTag = faker.lorem.word();
        const loginPage = new LoginPage();
        const tagPage = new TagPage();

        loginPage.visitPage();
        loginPage.login();
        loginPage.naviateToPage('Tags');
        tagPage.clickNewTag();
        tagPage.insertName(valueNameTag);
    
    })

    it('Asociar tag a un post', () => {

        const loginPage = new LoginPage();
        const postPage = new PostPage();

        loginPage.visitPage();
        loginPage.login();
        postPage.navigateToPostsPage();
        postPage.clickFirstElementPost();
        postPage.openSettings();
        postPage.addTag(valueNameTag);
        postPage.clickUpdatePost();
        postPage.navigateToPostsPage();
        loginPage.logOut(); 
    
    })
  })