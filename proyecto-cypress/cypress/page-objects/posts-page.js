import faker from 'faker';

export class PostPage {

    postMenuText = 'posts';

    clickNewPost() {
        cy.contains('New post').first().click();
    }

    fillPostTitle() {
        let postTitle = '';
        cy.task("getTitle").then(title => {
            postTitle = title;
            cy.get('[placeholder="Post Title"]').click().type(postTitle);
        });
        
        cy.wait(1000);
        cy.get('[data-kg="editor"]').first().click();
        return postTitle;
    }

    navigateToPostsPage() {
        cy.get('a').contains(`${postMenuText}`).click();
        cy.wait(500);
    }

    fillPostBody() {
        cy.task("getParagraph").then(body => {
            console.log('ddgdgdgdgdg', body);
            cy.get('[data-kg="editor"]').first().click().type(body);
        });
    }

    returnToPostList() {
        cy.get('a').contains(`${postMenuText}`).first().click();
    }

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
        cy.wait(1000);
        cy.get('ol.posts-list').children('.gh-posts-list-item').each(($el, index, $list) => {

            let texto = $el.children('.gh-list-data').children('h3').text().trim();

            if (texto === value) {
                expect($list.eq(index)).to.contain(value)
            }
        })
    }

    openSettings() {
        cy.wait(500);
        cy.get('[title=Settings]').click();
    }

    clickDeletePage() {
        cy.wait(1000);
        cy.get('.gh-btn.settings-menu-delete-button').click();
        cy.wait(1500);
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
        let authorName;
        cy.get('[data-option-index="0"]').then(($span) => {
            authorName = $span.text();
        });
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

    assertPostPublished() {
        cy.get('a').parent('div').should('contain', 'Published!');
    }

    assertPostPublishedV3_42_5() {
        cy.wait(1000);
        cy.get('header.gh-editor-header').children('div').children('div.flex').children('span').children('div').should('contain', 'Published');
    }

    assertThisPostContainsAuthor(postTitle, authorAdded) {
        cy.get('.posts-list').children('.gh-posts-list-item').each(($el, index, $list) => {
            let texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === postTitle) {
                let idElemento = $el.attr('id');
                cy.get(`#${idElemento} .gh-content-entry-meta`).should('contain', authorAdded);
            }
        })
    }
}
export const postMenuText = 'Post';