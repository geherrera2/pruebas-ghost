/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import faker from 'faker';

describe('Escenario Tag-02 - dinamico', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    const tagName = faker.lorem.word();
    const color = Math.floor(Math.random()*16777215).toString(16);
    const slug = faker.lorem.word();
    const description = faker.lorem.paragraph();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tags with all the information', () => {
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.insertColor(color);
        tagPage.insertSlug(slug);
        tagPage.insertDescription(description);
        tagPage.saveTag();
        tagPage.navigateToTagsList();
        cy.wait(500);
        tagPage.assertTagCreated(tagName);
    });
});