/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import faker from 'faker';

describe('Escenario Tag-06 - dinamico', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    let tagName = faker.lorem.word();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tag name', () => {
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.saveTag();
        tagPage.navigateToTagsList();
        cy.wait(500);
        tagPage.assertTagCreated(tagName);
    });

    it('Edit tag internal', () => {
        tagPage.selectTag(tagName);
        tagPage.clearTextField();
        tagPage.insertName('#'+tagName);
        tagPage.saveTag();
        tagPage.navigateToTagsList();
        cy.wait(500);
        tagPage.assertTagNotCreated(tagName);
    });
});