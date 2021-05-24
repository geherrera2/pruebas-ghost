/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import faker from 'faker';

describe('Escenario Tag-13 - dinamico', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    const tagName = faker.lorem.word();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tags', () => {
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.saveTag();
        tagPage.navigateToTagsList();
        cy.wait(500);
        tagPage.assertTagCreated(tagName);
    });

    it('Cancel delete Tag', () => {
        tagPage.selectTag(tagName);
        tagPage.deleteTag();
        tagPage.cancelDelete();
        tagPage.navigateToTagsList();
        tagPage.assertTagCreated(tagName);
    })
});