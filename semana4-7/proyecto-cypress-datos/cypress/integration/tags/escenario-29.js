/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import faker from 'faker';

describe('Escenario Tag-28 - pseudo', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    let title = '';

    before(() => {
        cy.task("createAllData");
    });

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('tag creation with button stay', () => {
        tagPage.clickNewTag();
        cy.task("getTitle").then(titleToSet => {
            title = titleToSet;
            tagPage.insertName(title);
            tagPage.insertSlug(title);
            cy.wait(500);
            tagPage.navigateToTagsList();
            tagPage.stayTag();
            tagPage.saveTag();
            tagPage.navigateToTagsList();
            cy.wait(500);
            tagPage.assertTagCreated(title);
        });
    });
});