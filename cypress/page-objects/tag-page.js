export class TagPage {
    clickNewTag() {
        cy.contains('New tag').first().click();
    }

    insertName(value) {

        // cy.get('#tag-name').type(value);
        cy.get('input[name=name]').click({ force: true }).type(value);
        cy.get('.gh-btn-blue').click({ force: true });
        // cy.get('input[name=name]').type(`${value}{enter}`)
    }

    clearTextField() {
        cy.get('input[name=name]').click({ force: true }).clear();
    }

    clickFirstTagElement() {
        cy.get('ol.tags-list').children('.gh-tags-list-item').each(($el, index, $list) => {
            if (index === 0) {
                let idElemento = $el.attr('id');
                cy.get(`#${idElemento} a[title*="Edit tag"]`).first().click({ force: true })
            }
        })
    }

    selectTag(value) {
        cy.get('ol.tags-list').children('.gh-tags-list-item').each(($el, index, $list) => {
            let texto = $el.children('.gh-tag-list-title').text().trim();
            if (texto === value) {
                let idElemento = $el.attr('id');
                cy.get(`#${idElemento} .gh-tag-list-title`).first().click({ force: true })
            }
        })
    }

    validateTag(value) {
        cy.get('ol.tags-list .gh-tags-list-item').should(($lis) => {
            console.log($lis);
            if ($lis.length > 0) {
                expect($lis).to.not.contain(value);
            } else {
                expect($lis.length).to.equal(0);
            }
        });
    }

    deleteTag() {
        cy.get('.gh-btn-red').contains('Delete tag').click();
        cy.wait(500);
        cy.get('.modal-content  .modal-footer .gh-btn-red').contains('Delete').click();
    }

    navigateToTagsPage() {
        cy.get('a').contains(`${tagMenuText}`).click();
        cy.wait(500);
    }

    assertTagCreated(tagName) {
        cy.get('h3').parent('a').should('contain', tagName);
    }

    navigateToTagsList() {
        cy.visit('http://localhost:2368/ghost/#/tags');
    }
}

export const tagMenuText = 'Tag';