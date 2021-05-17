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
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        tagPage.navigateToTagsPage();
        GeneralPage.stepScreenshot('3');
        tagPage.clickNewTag();
        GeneralPage.stepScreenshot('4');
        tagPage.insertName(tagName);
        tagPage.navigateToTagsList();
        GeneralPage.stepScreenshot('5');
        tagPage.assertTagCreated(tagName);
 
    })
})