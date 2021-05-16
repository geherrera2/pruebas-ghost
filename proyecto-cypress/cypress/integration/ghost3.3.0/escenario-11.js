/// <reference types="cypress" />
import { LoginPage } from '../../page-objects/login-page';
import { PagePage } from '../../page-objects/page-page';
import { TagPage } from '../../page-objects/tag-page';
import { GeneralPage } from '../../page-objects/general-page';
import faker from 'faker';

context('escenario-11', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();
    const tagPage = new TagPage();
    const generalPage = new GeneralPage();
    const tagName = faker.lorem.word();

    it('Create a tag', () => {
        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPage('Tags');
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.navigateToTagsList();
    });

    it('Asociar un tag a un page', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();
        generalPage.stepScreenshot('01');
        pagePage.clickFirstElementPage();
        generalPage.stepScreenshot('02');
        pagePage.openSettings();
        generalPage.stepScreenshot('03');
        pagePage.addTag(tagName);
        generalPage.stepScreenshot('04');
        pagePage.closeSettings();
        generalPage.stepScreenshot('05');
        pagePage.openPublish();
        generalPage.stepScreenshot('06');
        pagePage.publish();
        pagePage.returnList();
        generalPage.stepScreenshot('07');
        cy.wait(1000);
        cy.get('ol.gh-list .gh-posts-list-item').should(($lis) => {
            expect($lis).to.contain.text(tagName)
        });
    })

})