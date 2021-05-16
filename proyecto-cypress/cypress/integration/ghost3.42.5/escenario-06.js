
import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import { TagPage } from '../../page-objects/tag-page';
import { GeneralPage } from '../../page-objects/general-page';
import faker from 'faker';



context('escenario-6', () => {
    let valueNameTag = '';

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it('Crear Tag', () => {
        
        valueNameTag = faker.lorem.word();
        const loginPage = new LoginPage();
        const tagPage = new TagPage();

        loginPage.visitPage("3.42.5");
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        loginPage.navigateToPage('Tags');
        GeneralPage.stepScreenshot('2',100);
        tagPage.clickNewTag();
        GeneralPage.stepScreenshot('3',100);
        tagPage.insertName(valueNameTag);
    
    })

    it('Asociar tag a un post', () => {

        const loginPage = new LoginPage();
        const postPage = new PostPage();

        loginPage.visitPage("3.42.5");
        loginPage.login();
        postPage.navigateToPostsPage();
        postPage.clickFirstElementPost();
        GeneralPage.stepScreenshot('4',100);
        postPage.openSettings();
        GeneralPage.stepScreenshot('5',100);
        postPage.addTag(valueNameTag);
        postPage.clickUpdatePost();
        GeneralPage.stepScreenshot('6',100);
        postPage.navigateToPostsPage();
        loginPage.logOut(); 
    
    })
  })