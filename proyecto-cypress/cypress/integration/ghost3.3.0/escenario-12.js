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
        GeneralPage.stepScreenshot('step_01');
        loginPage.login();
        GeneralPage.stepScreenshot('step_02');
        tagPage.navigateToTagsPage();
        GeneralPage.stepScreenshot('step_03');
        tagPage.clickNewTag();
        GeneralPage.stepScreenshot('step_04');
        tagPage.insertName(tagName);
        GeneralPage.stepScreenshot('step_05');
        tagPage.navigateToTagsList();
        GeneralPage.stepScreenshot('step_06');
        tagPage.assertTagCreated(tagName);
        GeneralPage.stepScreenshot('step_07');
    })
})