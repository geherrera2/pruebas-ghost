export class TagPage{
    clickNewTag() {
        cy.contains('New tag').first().click();
    }

    insertName(value){
        
        // cy.get('#tag-name').type(value);
        cy.get('input[name=name]').click({force: true}).type(value);
        cy.get('.gh-btn-blue').click({force: true});
        // cy.get('input[name=name]').type(`${value}{enter}`)
    }

    clickFirstElementPost(){
        cy.get('ol.tags-list').children('.gh-tags-list-item').each(($el, index, $list) => {
            if(index === 0){
                let idElemento = $el.attr('id');
                cy.get(`#${idElemento} a[title*="Edit this post"]`).first().click({force: true})
            }
        })
    }

    validateTag(value){
        cy.get('ol.tags-list .gh-tags-list-item').should(($lis) => {
            expect($lis).to.contain(value);
        });
    }
}