/// <reference types="cypress" />

import {LoginPage} from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import faker from 'faker';

describe('Escenario Tag-07 - dinamico', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    const tagName = faker.lorem.word();
    const description = faker.lorem.paragraph(20);

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
    });

    it('Create tags with description more 500', () => {
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.insertDescription(description);
        tagPage.saveTag();
        tagPage.assertTagMessageMaximum();
    });
});