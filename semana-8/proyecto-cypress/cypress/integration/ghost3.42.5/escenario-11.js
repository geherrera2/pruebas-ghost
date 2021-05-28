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
    const tagName = faker.lorem.word();

    beforeEach(() => {
        loginPage.visitPage("3.42.5");
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
        GeneralPage.stepScreenshot('1');
        pagePage.clickFirstElementPage();
        GeneralPage.stepScreenshot('2');
        pagePage.openSettings();
        GeneralPage.stepScreenshot('3');
        pagePage.addTag(tagName);
        GeneralPage.stepScreenshot('4');
        pagePage.closeSettings();
        GeneralPage.stepScreenshot('5');
        pagePage.openPublish();
        GeneralPage.stepScreenshot('6');
        pagePage.publish();
        pagePage.returnList();
        GeneralPage.stepScreenshot('7');
        cy.wait(1000);
        cy.get('ol.gh-list .gh-posts-list-item').should(($lis) => {
            expect($lis).to.contain.text(tagName)
        });
    });

})