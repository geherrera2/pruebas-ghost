export class DesignPage {

    navigateToSettings() {
        cy.wait(1000);
        cy.get('a').contains(`${SettingsMenu}`).click({ force: true });
        cy.wait(500);
    }

    navigateToNavigation() {
        cy.wait(1000);
        cy.get('.gh-settings-main-grid>a').contains(`${NavigationMenu}`).click({ force: true });
        cy.wait(500);
    }

    fillMenu(value) {
        cy.get('#settings-navigation input').each(($el, index, $list) => {
            if ($el.val() == "") {
                let element = $el.attr('id');
                cy.wait(500);
                cy.get(`#${element}`).click({ force: true }).type(value);
            }
        });
        cy.wait(1000);
    }

    save() {
        cy.get('button.gh-btn.gh-btn-blue').click();
        cy.wait(1000);
    }

    deleteMenu(menu) {
        cy.wait(5000);
        cy.get('#settings-navigation .gh-blognav-delete').last().click({ force: true });
    }

    navigateToDesignPage() {
        cy.wait(500);
        cy.get('a').contains(`${designMenuText}`).click({ force: true });
        cy.wait(500);
    }

    addMenu(menu) {
        cy.get('#settings-navigation').children('div.gh-blognav-item').children('div.gh-blognav-item')
            .children('div').children('span').children('input').click({ force: true }).type(menu);
    }
}

export const SettingsMenu = 'settings';
export const NavigationMenu = 'Navigation';
export const designMenuText = 'Design';