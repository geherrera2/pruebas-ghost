import faker from 'faker';

export class SettingPage{
    setValueTitle(value){
        cy.get('button').contains('Expand').eq(0).click({force:true})
        cy.wait(500);
        cy.get('input.gh-input').eq(0).click({force:true}).clear().type(value);
        
    }

    saveSetting(){
        cy.wait(500);
        cy.get('.gh-canvas-header button.gh-btn-blue').click({force:true});
    }

    validateTitle(value){
        cy.wait(500);
        cy.get('.gh-nav-menu-details-blog').should('contain', value);
    }
}