/// <reference types="cypress" />
import { LoginPage } from '../page-objects/login-page';
import { PagePage } from '../page-objects/page-page';
import { TagPage } from '../page-objects/tag-page';
import faker from 'faker';

context('escenario-11', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();
    const tagPage = new TagPage();
    const tagName = faker.lorem.words();

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        
    });

    it('Create a tag', () => {
        loginPage.navigateToPage('Tags');
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.navigateToTagsList();
    });

    it('Asociar un tag a un page', () => {
        pagePage.navigateToPagesPage();
        pagePage.clickFirstElementPage();
        pagePage.openSettings();
        pagePage.addTag(tagName);
        pagePage.closeSettings();
        pagePage.openPublish();
        pagePage.publish();
        pagePage.returnList();
        cy.wait(1000);
        cy.get('ol.gh-list .gh-posts-list-item').should(($lis) => {
            expect($lis).to.contain.text(tagName)
        });
    })

})