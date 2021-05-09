/// <reference types="cypress" />
import {LoginPage} from '../page-objects/login-page';
import {PostPage} from '../page-objects/posts-page';
import faker from 'faker';

context('escenario-2', () => {
    let listaPost = [];

    it('Asociar tag a un post', () => {

        const loginPage = new LoginPage();
        const postPage = new PostPage();

        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPostsPage();
        postPage.clickFirstElementPost();
        postPage.openSettings();
        postPage.addTag('prueba tag');
        postPage.clickUpdatePost();
        loginPage.navigateToPostsPage();
        loginPage.logOut(); 
    
    })
  })