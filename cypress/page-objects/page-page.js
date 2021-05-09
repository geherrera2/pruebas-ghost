export class PagePage{
    clickNewPost() {
        cy.contains('New page').first().click();
    }
}