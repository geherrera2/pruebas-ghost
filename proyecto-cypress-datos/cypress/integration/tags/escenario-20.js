/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';

describe('Escenario Tag-20 - dinamico', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    const tagName = faker.lorem.word();
    const newTagName = faker.lorem.word();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tags only name', () => {
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.saveTag();
        tagPage.navigateToTagsList();
        cy.wait(1000);
        tagPage.assertTagCreated(tagName);
    });

    it('Edit Tag', () => {
        tagPage.selectTag(tagName);
        tagPage.clearTextField();
        tagPage.insertName(newTagName);
        tagPage.saveTag();
        tagPage.navigateToTagsList();
        cy.wait(1000);
        tagPage.assertTagCreated(newTagName);
    });
});