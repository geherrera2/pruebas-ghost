import { environment, userLoginData } from '../env';
import { postMenuText } from '../page-objects/posts-page';

export class LoginPage {

    loginURL = 'signin/'

    visitPage() {
        cy.visit(`${environment.baseURL}${this.loginURL}`);
    }


    login() {

        cy.wait(1000)
        cy.get('input[name=identification]').type(userLoginData.username)
        cy.get('input[name=password]').type(`${userLoginData.password}{enter}`)
        cy.wait(500)
    }

    logOut() {
        cy.wait(500);
        cy.get('.gh-nav-bottom .ember-basic-dropdown-trigger').click({ force: true })
        cy.get('a[href*="#/signout/"]').first().click()
    }

    navigateToPostsPage() {
        cy.get('a').contains(`${postMenuText}`).click();
        cy.wait(500)
    }

    naviateToPage(value){
        cy.get('a').contains(`${value}`).click();
        cy.wait(500)
    }


}