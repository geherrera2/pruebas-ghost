import faker from 'faker';

export class PostPage {

    postMenuText = 'posts';

    clickNewPost() {
        cy.contains('New post').first().click();
    }

    fillPostTitle(title) {
        cy.get('[placeholder="Post Title"]').click().type(title);
        cy.get('[data-kg="editor"]').first().click();
    }

    navigateToPostsPage() {
        cy.get('a').contains(`${postMenuText}`).click();
        cy.wait(500);
    }

    fillPostBody(postBodyText) {
        cy.get('[data-kg="editor"]').first().click().type(postBodyText);
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
            let text = $el.children('.gh-list-data').children('h3').text().trim();
            if (text === value) {
                expect($list.eq(index)).to.contain(value);
            }
            if(index === ($list.length-1)){
                if(text){
                    expect(text).to.equal(value);
                }else{
                    expect("post title does not exist").to.equal(value);
                } 
            }
        }
        );
    }

    openSettings() {
        cy.wait(500);
        cy.get('[title=Settings]').click();
    }

    clickDeletePage() {
        cy.wait(1000);
        cy.get('.gh-btn.settings-menu-delete-button').click();
        cy.wait(1000);
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

    openPublish() {
        cy.wait(500);
        cy.get('.gh-publishmenu.ember-view').click();
    }

    publish() {
        cy.wait(500);
        cy.get('button.gh-publishmenu-button').click();
    }

    setDateScheduled(date){
        cy.get('.gh-publishmenu-section [placeholder="YYYY-MM-DD"]').click().clear().type(date);
    }

    assertPostPublished() {
        cy.get('a').parent('div').should('contain', 'Published!')
    }

    assertThisPostContainsAuthor(postTitle, authorAdded) {
        cy.get('.posts-list').children('.gh-posts-list-item').each(($el, index, $list) => {
            let texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === postTitle) {
                let idElemento = $el.children('.gh-post-list-title').attr('id');
                cy.get(`#${idElemento}`).should('contain', authorAdded);
            }
        })
    }

    validateExistPostIn(titlePage, status = 'Draft') {
        let valueItemStatus;
        cy.get('ol.gh-list ').children('.gh-posts-list-item').each(($el, index, $list) => {
            const texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === titlePage) {
                valueItemStatus = $el.children(`.gh-post-list-status`).text().trim();
            }

            if(index === ($list.length-1)){
                if(valueItemStatus){
                    expect(valueItemStatus).to.equal(status);
                }else{
                    expect("Post does not exist").to.equal(status);
                } 
            }
        });

    }

    selectPost(value) {
        cy.wait(500)
        cy.get('ol.gh-list ').children('.gh-posts-list-item').each(($el, index, $list) => {
            let texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === value) {
                let idElemento = $el.children('.gh-post-list-title').attr('id');
                cy.get(`#${idElemento}`).first().click({ force: true })
            }
        })
    }
}
export const postMenuText = 'Post';