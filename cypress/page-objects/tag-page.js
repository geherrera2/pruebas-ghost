export class TagPage{
    clickNewPost() {
        cy.contains('New tag').first().click();
    }

    clickFirstElementPost(){
        cy.get('ol.tags-list').children('.gh-tags-list-item').each(($el, index, $list) => {
            if(index === 0){
                let idElemento = $el.attr('id');
                cy.get(`#${idElemento} a[title*="Edit this post"]`).first().click({force: true})
            }
        })
    }

    selectFirstTag(){
        cy.get('ol.tags-list .gh-tags-list-item').should(($lis) => {
            $lis.eq(0).click();
            // expect($lis.eq(0)).to.contain(value)
          });
    }
}