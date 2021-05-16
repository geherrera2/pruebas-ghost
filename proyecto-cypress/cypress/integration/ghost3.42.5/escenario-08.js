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
        GeneralPage.stepScreenshot('step_01');
        loginPage.login();
        GeneralPage.stepScreenshot('step_02');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('step_03');
        pagePage.clickOnNewPage();
        GeneralPage.stepScreenshot('step_04');
        pagePage.clickOnPageTitle();
        GeneralPage.stepScreenshot('step_05');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('step_06');
        cy.wait(500);
        pagePage.clickFirstElementPage();
        GeneralPage.stepScreenshot('step_07');
        pagePage.updateTitlePage(pageTitle);
        GeneralPage.stepScreenshot('step_08');
        pagePage.clickOnPublishPage();
        GeneralPage.stepScreenshot('step_09');
        pagePage.navigateToPagesPage();
        GeneralPage.stepScreenshot('step_10');
        pagePage.assertPageEdited(pageTitle);
        GeneralPage.stepScreenshot('step_11');
    })
})