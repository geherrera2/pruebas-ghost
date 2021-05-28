import { PagePage } from "../page-page";

export class PagePageV2 extends PagePage {

    
    selectPage(value) {
        cy.get('ol.gh-list ').children('.gh-posts-list-item').each(($el, index, $list) => {
            let texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === value) {
                const idElementoTitulo = $el.children('a.gh-post-list-title').attr('id');
                cy.get(`#${idElementoTitulo}`).click({ force: true })
            }
        })
    }

    validatePage(value) {
        cy.get('ol.gh-list ').children('.gh-posts-list-item').each(($el, index, $list) => {

            let texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === value) {
                const idElementoTitulo = $el.children('a.gh-post-list-status').attr('id');
                cy.get(`#${idElementoTitulo}`).should('not.contain', 'Draft');
            }
        })
    }
 
}

