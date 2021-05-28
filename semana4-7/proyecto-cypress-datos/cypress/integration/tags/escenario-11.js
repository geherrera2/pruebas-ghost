/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import faker from 'faker';

describe('Escenario Tag-11 - dinamico', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    const tagName = faker.lorem.word();
    const slug = faker.lorem.word();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Abandon tag creation', () => {
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.insertSlug(slug);
        tagPage.navigateToTagsList();
        tagPage.leaveTag();
        cy.wait(1000);
        tagPage.assertTagNotCreated(tagName);
    });
});