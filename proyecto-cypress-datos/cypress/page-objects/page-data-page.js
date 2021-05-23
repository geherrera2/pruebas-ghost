import { PagePage } from "./page-page";

export class PageDataPage extends PagePage {

    prueba = 'hola';

    returnList(pageMenuText) {
        cy.wait(1000);
        cy.get('a').contains(`${pageMenuText}`).first().click();
    }

    validateExistPageInDraff(value) {

        let valueItemStatus;
        cy.get('ol.gh-list ').children('.gh-posts-list-item').each(($el, index, $list) => {
            const texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === value) {
                valueItemStatus = $el.children(`.gh-post-list-status`).text().trim();
                // expect(resultText).to.equal('Draft');
            }

            if(index === ($list.length-1)){
                if(valueItemStatus){
                    expect(valueItemStatus).to.equal('Draft');
                }else{
                    expect("No existe el item").to.equal('Draft');
                } 
            }
        });

    }

    test(){
        cy.wait(500)
        console.log(this.prueba);
    }

    clickBody(){
        cy.get('.gh-koenig-editor-pane').click();
    }
   

}
