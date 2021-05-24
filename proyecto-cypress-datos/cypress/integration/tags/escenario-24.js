/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';

describe('Escenario Tag-24 - a priori', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    let title = '';

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tags only name', () => {
        tagPage.clickNewTag();
        cy.task("getTitle").then(titleToSet => {
            title = titleToSet;
            tagPage.insertName(title);
            tagPage.saveTag();
            tagPage.navigateToTagsList();
            cy.wait(1000);
            tagPage.assertTagCreated(title);
        });
    });

    it('Eliminar Tag', () => {
        tagPage.selectTag(title);
        tagPage.deleteTag();
        tagPage.confirmDelete();
        tagPage.assertTagNotCreated(title);
    })
});