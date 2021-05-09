export class PostPage {

    clickNewPost() {
        cy.contains('New post').first().click();
    }

    clickOnPostTitle() {
        cy.get('[placeholder="Post Title"]').click();
    }

    clickFirstElementPage() {
        cy.get('ol.posts-list').children('.gh-posts-list-item').each(($el, index, $list) => {
            if (index === 0) {
                let idElemento = $el.attr('id');
                cy.get(`#${idElemento} a[title*="Edit this post"]`).first().click({ force: true })
            }
        })
    }

    updateTitlePage(value) {
        cy.wait(500);
        cy.get('textarea.gh-editor-title').clear().type(value);
    }

    clickUpdatePage() {
        cy.wait(500);
        cy.get('.gh-publishmenu-trigger').click();

        cy.wait(500);
        cy.get('.gh-publishmenu-button').click();
    }

    assertUpdatePage(value) {
        cy.get('ol.posts-list .gh-posts-list-item').should(($lis) => {
            console.log($lis);
            expect($lis.eq(0)).to.contain(value)
        });
    }

    navigateToPostsPage() {
        cy.wait(500)
        cy.get('a').contains(`${postMenuText}`).click();
        cy.wait(500)
    }

    clickOnPublishPost() {
        cy.wait(500);
        cy.get('.gh-publishmenu-trigger').click();

        cy.wait(500);
        cy.get('.gh-publishmenu-button').click();
    }

    assertPostPublished() {
        cy.get('gh-content-status-published nowrap').should(($lis) => {
            console.log($lis);
            expect($lis.eq(0)).to.contain("Published")
        });
    }
}
export const postMenuText = 'Post';