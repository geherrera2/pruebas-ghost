import { LoginPage } from '../../page-objects/login-page';
import faker from 'faker';
import { TagPage } from '../../page-objects/tag-page';
import { GeneralPage } from '../../page-objects/general-page';


context('Scenario 12 - Create Tag', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();

    it('Create a tag', () => {
        const tagName = faker.lorem.words();

        loginPage.visitPage();
        GeneralPage.stepScreenshot('01');
        loginPage.login();
        GeneralPage.stepScreenshot('02');
        tagPage.navigateToTagsPage();
        GeneralPage.stepScreenshot('03');
        tagPage.clickNewTag();
        GeneralPage.stepScreenshot('04');
        tagPage.insertName(tagName);
        GeneralPage.stepScreenshot('05');
        tagPage.navigateToTagsList();
        GeneralPage.stepScreenshot('06');
        tagPage.assertTagCreated(tagName);
        GeneralPage.stepScreenshot('07');
    })
})