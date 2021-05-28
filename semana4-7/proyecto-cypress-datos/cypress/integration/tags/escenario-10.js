/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import faker from 'faker';

describe('Escenario Tags-10', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    const tagName = faker.lorem.word();
    const color = faker.commerce.color();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tag color failed', () => {
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.insertColor(color);
        tagPage.saveTag();
        tagPage.assertTagMessageColor();
    });
});