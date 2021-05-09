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

    /*clickFirstElementPage(){
    clickFirstElementPost() {
        cy.get('ol.posts-list').children('.gh-posts-list-item').each(($el, index, $list) => {
            if (index === 0) {
                let idElemento = $el.attr('id');
                cy.get(`#${idElemento} a[title*="Edit this post"]`).first().click({ force: true })
            }
        })
    }*/

    clickFirstElementPost() {
        cy.get('ol.posts-list').children('.gh-posts-list-item').each(($el, index, $list) => {
            if (index === 0) {
                let element = $el.children('a').first().attr('id');
                cy.wait(500);
                cy.get(`#${element}`).click({ force: true });
            }
        })
    }

    updateTitlePost(value) {
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

    openSettings() {
        cy.wait(500);
        cy.get('[title=Settings]').click();
    }

    clickDeletePage() {
        cy.wait(500);
        cy.get('.gh-btn.settings-menu-delete-button').click();
        cy.wait(500);
        cy.get('button.gh-btn.gh-btn-red').click();
    }

    closeSettings() {
        cy.get('.hidden').contains('Close').click({ force: true });
    }

    addTag(value) {
        cy.wait(100);
        cy.get('#tag-input').click({ force: true });
        cy.wait(100);
        cy.get('.ember-basic-dropdown-content-wormhole-origin ul li').contains(value).click({ force: true });
        cy.wait(100);
        cy.get('.settings-menu-header-action').click({ force: true });
    }

    addAuthor() {
        cy.wait(100);
        cy.get('[id="author-list"]').click();
        cy.wait(100);
        let authorName = cy.get('[data-option-index="0"]').value;
        cy.get('[data-option-index="0"]').click();
        cy.wait(100);
        return authorName;
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

    assertThisPostContainsAuthor(postTitle, authorAdded) {
        expect(postTitle).to.be.oneOf(cy.get('ol.posts-list').children('.gh-posts-list-item').children('a').children('h3').value);
    }

    assertPostPublished(value) {
        cy.get('a').parent('div').should('contain', 'Published!')
    }
}
export const postMenuText = 'Post';