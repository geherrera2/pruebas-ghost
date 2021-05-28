import { environment } from '../env';
export class TagPage {
    clickNewTag() {
        cy.contains('New tag').first().click();
    }

    clickInternalTag() {
        cy.contains('Internal tags').first().click();
    }

    insertName(value) {
        cy.get('input[name=name]').click({ force: true }).type(value);
    }

    insertColor(value) {
        cy.get('input[name=accent-color]').click({ force: true }).type(value);
    }

    insertSlug(value) {
        cy.get('input[name=slug]').click({ force: true }).type(value);
    }

    insertDescription(value) {
        cy.get('textarea[name=description]').click({ force: true }).type(value);
    }

    saveTag(){
        cy.wait(1000);
        cy.get('.gh-btn-blue').click({ force: true });
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
        cy.wait(500);
        cy.get('ol.tags-list .gh-tags-list-item').should(($lis) => {
        
            if ($lis.length > 0) {
                expect($lis).to.not.contain(value);
            } else {
                expect($lis.length).to.equal(0);
            }
        });
    }

    deleteTag() {
        cy.wait(1000);
        cy.get('.gh-btn-red').contains('Delete tag').click();
    }

    confirmDelete(){
        cy.wait(1000);
        cy.get('.modal-content  .modal-footer .gh-btn-red').contains('Delete').click();
    }

    cancelDelete(){
        cy.wait(1000);
        cy.get('.modal-content  .modal-footer .gh-btn').contains('Cancel').click();
    }

    leaveTag() {
        cy.wait(1000);
        cy.get('.modal-content  .modal-footer .gh-btn-red').contains('Leave').click();
    }

    stayTag() {
        cy.wait(1000);
        cy.get('.modal-content  .modal-footer .gh-btn').contains('Stay').click();
    }

    navigateToTagsPage() {
        cy.wait(1000);
        cy.get('a').contains(`${tagMenuText}`).click();
    }

    assertTagCreated(tagName) {
        cy.get('h3').parent('a').should('contain', tagName);
    }

    assertTagMessageMaximum() {
        cy.get('p').parent('.form-group.error.ember-view').should('contain', 'Maximum');
    }

    assertTagMessageName() {
        cy.get('p').parent('.form-group .error').should('contain', 'specify a name');
    }

    assertTagMessageColor() {
        cy.get('p').parent('.form-group .error').should('contain', 'color should be in valid hex format');
    }

    assertTagNotCreated(tagName) {
        cy.get('h3').parent('a').should('not.contain', tagName);
    }

    navigateToTagsList() {
        cy.wait(1000);
        cy.visit(`${environment.baseURL}#/tags`);
    }
}

export const tagMenuText = 'Tag';