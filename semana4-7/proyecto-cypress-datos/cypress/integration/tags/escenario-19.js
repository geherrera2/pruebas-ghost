/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';

describe('Escenario Tag-19 - pseudo', () => {

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

    it('Create tags name 100 chars', () => {
        tagPage.clickNewTag();
        cy.task("getTitle", 100).then(titleToSet => {
            title = titleToSet;
            tagPage.insertName(title);
            tagPage.saveTag();
            tagPage.navigateToTagsList();
            cy.wait(1000);
            tagPage.assertTagCreated(title);
        });
    });
});