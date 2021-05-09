/// <reference types="cypress" />
import {LoginPage} from '../page-objects/login-page';
import faker from 'faker';
import { PagePage } from '../page-objects/page-page';

context('escenario-2', () => {
    let listaPost = [];

    it('Publicar Page', () => {

        const loginPage = new LoginPage();
        const pagePage = new PagePage();

        loginPage.visitPage();
        loginPage.login();
        loginPage.naviateToPage('Pages');
        pagePage.clickNewPost();
    
    })
  })