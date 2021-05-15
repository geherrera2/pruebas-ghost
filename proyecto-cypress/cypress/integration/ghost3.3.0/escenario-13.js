import { LoginPage } from '../../page-objects/login-page';
import faker from 'faker';
import { TagPage } from '../../page-objects/tag-page';


context('Scenario 13 - Edit a Tag', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();
    let tagName = '';
    let newTagName = '';

    beforeEach(() => {
        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPage('Tags');
    });

    it('Create a tag', () => {
        tagName = faker.lorem.words();
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.navigateToTagsList();
    });

    it('Edit a tag', () => {
        newTagName = faker.lorem.words();
        tagPage.selectTag(tagName);
        tagPage.clearTextField();
        tagPage.insertName(newTagName);
    });

    it('Assert new tag name', () => {
        tagPage.assertTagCreated(newTagName);
    });
})