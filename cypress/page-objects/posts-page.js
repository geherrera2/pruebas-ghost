import faker from 'faker';
export class PostPage {

    postMenuText = 'posts';

    clickNewPost() {
        cy.contains('New post').first().click();
    }

    fillPostTitle() {
        let postTitle = faker.lorem.sentence();
        cy.get('[placeholder="Post Title"]').click().type(postTitle);
        cy.wait(1000);
        cy.get('[data-kg="editor"]').first().click();
        return postTitle;
    }

    navigateToPostsPage() {
        cy.get('a').contains(`${postMenuText}`).click();
        cy.wait(500);
    }

    fillPostBody() {
        let postBodyText = faker.lorem.word();
        cy.get('[data-kg="editor"]').first().click().type(postBodyText);
    }

    returnToPostList() {
        cy.get('a').contains(`${postMenuText}`).first().click();
    }

    clickFirstElementPost(){
        cy.get('ol.posts-list').children('.gh-posts-list-item').each(($el, index, $list) => {
            if(index === 0){
                let idElemento = $el.attr('id');
                cy.get(`#${idElemento} a[title*="Edit this post"]`).first().click({force: true})
            }
        })
    }

    updateTitlePage(value) {
        console.log(value);
        cy.wait(500);
        cy.get('textarea.gh-editor-title').clear().type(value);
    }

    clickUpdatePost() {
        cy.wait(500);
        cy.get('.gh-publishmenu-trigger').click();

        cy.wait(500);
        cy.get('.gh-publishmenu-button').click();
    }

    assertUpdatePost(value) {
        cy.get('ol.posts-list .gh-posts-list-item').should(($lis) => {
            console.log($lis);
            expect($lis.eq(0)).to.contain(value)
        });
    }

    openSettings(){
        cy.wait(500);
        cy.get('.post-settings').click();
    }

    addTag(value){
        cy.wait(100);
        cy.get('#tag-input').click({force: true});
        cy.wait(100);
        cy.get('.ember-basic-dropdown-content-wormhole-origin ul li').contains(value).click({force: true});
        cy.wait(100);
        cy.get('.settings-menu-header-action').click({force: true});
    }

    clickOnPostTitle() {
        cy.get('[placeholder="Post Title"]').click();
    }

    clickOnPublishPost() {
        cy.wait(500);
        cy.get('.gh-publishmenu-trigger').click();
        cy.wait(500);
        cy.get('.gh-publishmenu-button').click();
    }
}
export const postMenuText = 'Post';