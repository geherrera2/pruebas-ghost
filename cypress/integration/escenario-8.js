import { LoginPage } from '../page-objects/login-page';
import faker from 'faker';
import { PagePage } from '../page-objects/page-page';

context('Scenario 8 - Edit Page', () => {

    const loginPage = new LoginPage();
    const pagePage = new PagePage();

    it('Edit page', () => {
        const pageTitle = faker.lorem.words();

        loginPage.visitPage();
        loginPage.login();
        pagePage.navigateToPagesPage();
        pagePage.clickOnNewPage();
        pagePage.clickOnPageTitle();
        pagePage.navigateToPagesPage();
        pagePage.clickOnFirstElementPages();
        pagePage.updateTitlePage(pageTitle);
        pagePage.clickOnPublishPage();
        pagePage.navigateToPagesPage();
        pagePage.assertPageEdited(pageTitle);
    })
})