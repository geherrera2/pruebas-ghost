/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';

describe('Escenario Tag-30 - a priori', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    let title = '';

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tags', () => {
        tagPage.clickNewTag();
        cy.task("getTitle").then(titleToSet => {
            title = titleToSet;
            tagPage.insertName(title);
            tagPage.saveTag();
            tagPage.navigateToTagsList();
            cy.wait(500);
            tagPage.assertTagCreated(title);
        });
    });

    it('Cancel delete Tag', () => {
        tagPage.selectTag(title);
        tagPage.deleteTag();
        tagPage.cancelDelete();
        tagPage.navigateToTagsList();
        tagPage.assertTagCreated(title);
    })
});