/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';

describe('Escenario Tag-27 - pseudo', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    let title = '';

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    before(() => {
        cy.task("createAllData");
    });

    it('Abandon tag creation', () => {
        tagPage.clickNewTag();
        cy.task("getTitle").then(titleToSet => {
            title = titleToSet;
            tagPage.insertName(title);
            tagPage.insertSlug(title);
            tagPage.navigateToTagsList();
            tagPage.leaveTag();
            cy.wait(1000);
            tagPage.assertTagNotCreated(title);
        });
    });
});