import { LoginPage } from '../page-objects/login-page';
import faker from 'faker';
import { TagPage } from '../page-objects/tag-page';


context('Scenario 12 - Create Tag', () => {

    const loginPage = new LoginPage();
    const tagPage = new TagPage();

    it('Create a tag', () => {
        const tagName = faker.lorem.words();

        loginPage.visitPage();
        loginPage.login();
        tagPage.navigateToTagsPage();
        tagPage.clickNewTag();
        tagPage.insertName(tagName);
        tagPage.navigateToTagsList();
        tagPage.assertTagCreated(tagName);
    })
})