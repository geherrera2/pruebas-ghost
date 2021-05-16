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
        GeneralPage.stepScreenshot('01');
        loginPage.login();
        GeneralPage.stepScreenshot('02');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('03');
        pagePage.clickOnNewPage();
        GeneralPage.stepScreenshot('04');
        pagePage.clickOnPageTitle();
        GeneralPage.stepScreenshot('05');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('06');
        cy.wait(500);
        pagePage.clickFirstElementPage();
        GeneralPage.stepScreenshot('07');
        pagePage.updateTitlePage(pageTitle);
        GeneralPage.stepScreenshot('08');
        pagePage.clickOnPublishPage();
        GeneralPage.stepScreenshot('09');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('10');
        pagePage.assertPageEdited(pageTitle);
        GeneralPage.stepScreenshot('11');
    })
})