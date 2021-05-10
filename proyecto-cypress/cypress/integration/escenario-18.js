/// <reference types="cypress" />
import {LoginPage} from '../page-objects/login-page';
import faker from 'faker';
import { PagePage } from '../page-objects/page-page';

context('escenario-18-Editar Title', () => {
    let listaPost = [];

    it('Publicar Page', () => {

        const loginPage = new LoginPage();
        const pagePage = new PagePage();

        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPage('Pages');
        pagePage.clickNewPost();
    
    })
  })