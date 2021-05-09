export class PagePage{

    navigateToPagesPage() {
        cy.get('a').contains(`${pageMenuText}`).click();
        cy.wait(500);
    }

    clickNewPage() {
        cy.contains('New page').first().click();
    }

    fillPageTitle(valueTitlePage) {
        cy.get('[placeholder="Page Title"]').click().type(valueTitlePage);
        cy.wait(1000);
    }

    returnList() {
        cy.get('a').contains(`${pageMenuText}`).first().click();
    }

    clickFirstElementPage() {
        cy.get('ol.gh-list').children('.gh-posts-list-item').each(($el, index, $list) => {
            if (index === 0) {
                let element = $el.children('a').first().attr('id');
                cy.wait(500);
                cy.get(`#${element}`).click({force: true});
            }
        })
    }

    fillPageBody(valueBodyPage){
        cy.get('[data-kg="editor"]').click().type(valueBodyPage);
        cy.wait(1000);
    }

    openPublish(){
        cy.wait(500);
        cy.get('.gh-publishmenu.ember-view').click();
    }

    publish(){
        cy.wait(500);
        cy.get('button.gh-publishmenu-button').click();
    }

    openSettings(){
        cy.wait(500);
        cy.get('[title=Settings]').click();
    }

    closeSettings(){
        cy.wait(500);
        cy.get('.close.settings-menu-header-action').click();
    }

    filterTag(){
        cy.wait(500);
        cy.get('.gh-contentfilter-tag').click();
        cy.wait(500);
        cy.get('#ember-basic-dropdown-content-ember716>ul>li[data-option-index="1"]').click();
    }

    addTag(){
        cy.wait(500);
        cy.get('#ember-power-select-multiple-options-ember218 > input').click()
        cy.wait(500);
        cy.get('#ember-power-select-options-ember218 > LI').click();
    }

}

export const pageMenuText = 'Page';