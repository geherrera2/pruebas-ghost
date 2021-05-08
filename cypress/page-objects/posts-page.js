import faker from 'faker';
export class PostPage {
    
    clickNewPost() {
        cy.contains('New post').first().click();
    }
    
    fillPostTitle() {
        cy.get('[placeholder="Post Title"]').click().type(faker.lorem.sentence());
    }
    
    
}
export const postMenuText = 'Post';