/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import faker from 'faker';

describe('Escenario Tag-18 - dinamico', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    const tagName = faker.lorem.words(50);

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tags name 100 chars', () => {
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.saveTag();
        tagPage.navigateToTagsList();
        cy.wait(1000);
        tagPage.assertTagCreated(tagName);
    });
});