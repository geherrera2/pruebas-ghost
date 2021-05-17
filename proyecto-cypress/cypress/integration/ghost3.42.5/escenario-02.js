
import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';
import { GeneralPage } from '../../page-objects/general-page';

context('escenario-2:Editar Post', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('Editar Post', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        const valueTitlePost = faker.lorem.sentence();

        loginPage.visitPage();
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        postPage.navigateToPostsPage();
        GeneralPage.stepScreenshot('2',100);
        postPage.clickFirstElementPost();
        postPage.updateTitlePost(valueTitlePost);
        GeneralPage.stepScreenshot('3',100);
        postPage.clickUpdatePost();
        postPage.navigateToPostsPage();
        postPage.assertUpdatePost(valueTitlePost);     
    
    })
  })