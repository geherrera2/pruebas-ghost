/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import faker from 'faker';

describe('Escenario Tag-12 - dinamico', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    const tagName = faker.lorem.word();
    const slug = faker.lorem.word();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('tag creation with button stay', () => {
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.insertSlug(slug);
        cy.wait(500);
        tagPage.navigateToTagsList();
        tagPage.stayTag();
        tagPage.saveTag();
        tagPage.navigateToTagsList();
        cy.wait(500);
        tagPage.assertTagCreated(tagName);
    });
});