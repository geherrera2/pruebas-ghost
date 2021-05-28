/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';

describe('Escenario Tag-09', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tag empty', () => {
        tagPage.clickNewTag();
        tagPage.saveTag();
        tagPage.assertTagMessageName();
    });
});