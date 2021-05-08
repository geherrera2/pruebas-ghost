import {environment, userLoginData} from '../env';
import {postMenuText} from '../page-objects/posts-page';

export class LoginPage {

    loginURL = 'signin/'

    login() {
        cy.visit(`${environment.baseURL}${this.loginURL}`)
        cy.wait(1000)
        cy.get('input[name=identification]').type(userLoginData.username)
        cy.get('input[name=password]').type(`${userLoginData.password}{enter}`)
        cy.wait(500)
    }

    navigateToPostsPage() {
        cy.get('a').contains(`${postMenuText}`).click();
        cy.wait(500)
    }


}