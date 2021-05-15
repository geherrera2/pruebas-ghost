
import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';
import { GeneralPage } from '../../page-objects/general-page';

context('escenario-2:Editar Post', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();
    const generalPage = new GeneralPage();

    it('Editar Post', () => {
        const valueTitlePost = faker.lorem.sentence();

        loginPage.visitPage();
        generalPage.stepScreenshot('1', 'Ghost 3.3.0');
        loginPage.login();
        postPage.navigateToPostsPage();
        generalPage.stepScreenshot('2', 'Página Post',100);
        postPage.clickFirstElementPost();
        postPage.updateTitlePost(valueTitlePost);
        generalPage.stepScreenshot('3', 'Update post',100);
        postPage.clickUpdatePost();
        postPage.navigateToPostsPage();
        postPage.assertUpdatePost(valueTitlePost);
        loginPage.logOut();
        
    
    })
  })