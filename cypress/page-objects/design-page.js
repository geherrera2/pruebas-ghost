export class DesignPage{

    navigateToSettings() {
        cy.wait(1000);
        cy.get('a').contains(`${SettingsMenu}`).click({force:true});
        cy.wait(500);
    }

    navigateToNavigation() {
        cy.wait(1000);
        cy.get('.gh-settings-main-grid>a').contains(`${NavigationMenu}`).click({force:true});
        cy.wait(500);
    }

    fillMenu(value) {
        cy.get('#settings-navigation input').each(($el, index, $list) => {
            if($el.val() == ""){
                let element = $el.attr('id');
                cy.wait(500);
                cy.get(`#${element}`).click().type(value);
            }
        });
        cy.wait(1000);
    }

    save(){
        cy.get('button.gh-btn.gh-btn-primary').click();
        cy.wait(1000);
    }


}

export const SettingsMenu = 'settings';
export const NavigationMenu = 'Navigation';