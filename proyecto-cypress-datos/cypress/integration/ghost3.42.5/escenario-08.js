import { LoginPage } from '../../page-objects/login-page';
import faker from 'faker';
import { PagePage } from '../../page-objects/page-page';
import { GeneralPage } from '../../page-objects/general-page';

context('Scenario 8 - Edit Page', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();

    it('Edit page', () => {
        const pageTitle = faker.lorem.words();

        loginPage.visitPage();
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('3');
        pagePage.clickOnNewPage();
        GeneralPage.stepScreenshot('4');
        pagePage.clickOnPageTitle();
        GeneralPage.stepScreenshot('5');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('6');
        cy.wait(500);
        pagePage.clickFirstElementPage();
        GeneralPage.stepScreenshot('7');
        pagePage.updateTitlePage(pageTitle);
        GeneralPage.stepScreenshot('8');
        pagePage.clickOnPublishPage();
        GeneralPage.stepScreenshot('9');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('10');
        pagePage.assertPageEdited(pageTitle);
        GeneralPage.stepScreenshot('11');
    })
})