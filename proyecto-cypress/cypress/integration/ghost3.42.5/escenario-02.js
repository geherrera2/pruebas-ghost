
import {LoginPage} from '../../page-objects/login-page';
import {PostPage} from '../../page-objects/posts-page';
import faker from 'faker';

context('escenario-2:Editar Post', () => {

    const loginPage = new LoginPage();
    const postPage = new PostPage();

    it('Editar Post', () => {
        const valueTitlePost = faker.lorem.sentence();

        loginPage.visitPage("3.42.5");
        loginPage.login();
        postPage.navigateToPostsPage();
        postPage.clickFirstElementPost();
        postPage.updateTitlePost(valueTitlePost);
        postPage.clickUpdatePost();
        postPage.navigateToPostsPage();
        postPage.assertUpdatePost(valueTitlePost);
        loginPage.logOut();
        
    
    })
  })