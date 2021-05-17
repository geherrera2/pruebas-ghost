import { LoginPage } from '../../page-objects/login-page';
import { TagPage } from '../../page-objects/tag-page';
import { GeneralPage } from '../../page-objects/general-page';
import faker from 'faker';


context('Scenario 13 - Edit a Tag', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    let tagName = '';
    let newTagName = '';

    beforeEach(() => {
        loginPage.visitPage("3.42.5");
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        loginPage.navigateToPage('Tags');
        GeneralPage.stepScreenshot('3');
    });

    it('Create a tag', () => {
        tagName = faker.lorem.words();
        tagPage.clickNewTag();
        GeneralPage.stepScreenshot('4');
        tagPage.insertName(tagName);
        tagPage.navigateToTagsList();
        GeneralPage.stepScreenshot('5');
    });

    it('Edit a tag', () => {
        newTagName = faker.lorem.words();
        tagPage.selectTag(tagName);
        GeneralPage.stepScreenshot('6');
        tagPage.clearTextField();
        GeneralPage.stepScreenshot('7');
        tagPage.insertName(newTagName);
        GeneralPage.stepScreenshot('8');
    });

    it('Assert new tag name', () => {
        tagPage.assertTagCreated(newTagName);
    });
})