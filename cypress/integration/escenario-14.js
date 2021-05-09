/// <reference types="cypress" />
import {LoginPage} from '../page-objects/login-page';
import faker from 'faker';
import { PagePage } from '../page-objects/page-page';
import { TagPage } from '../page-objects/tag-page';

context('escenario-14-eliminar tag', () => {
    let listaPost = [];

    it('Eliminar Tag', () => {

        const loginPage = new LoginPage();
        const tagPage = new TagPage();

        loginPage.visitPage();
        loginPage.login();
        loginPage.naviateToPage('Tags');
        tagPage.selectFirstTag();
    
    })
  })