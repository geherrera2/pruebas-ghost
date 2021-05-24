import { PagePage } from "./page-page";

export class PageDataPage extends PagePage {

    prueba = 'hola';

    returnList(pageMenuText) {
        cy.wait(500);
        cy.get('a').contains(`${pageMenuText}`).first().click();
    }

    validateExistPageIn(titlePage,status = 'Draft') {
        let valueItemStatus;
        cy.get('ol.gh-list ').children('.gh-posts-list-item').each(($el, index, $list) => {
            const texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === titlePage) {
                valueItemStatus = $el.children(`.gh-post-list-status`).text().trim();
            }

            if(index === ($list.length-1)){
                if(valueItemStatus){
                    expect(valueItemStatus).to.equal(status);
                }else{
                    expect("No existe el item").to.equal(status);
                } 
            }
        });

    }

    sizeListPage(callback) {
       let cosa = "o"
        cy.get('ol.gh-list ').children('.gh-posts-list-item').each(($el, index, $list) => {
           cosa = "2o"
        });
        return cosa;
    }

    validateNotExistPageIn(titlePage,status = 'Draft') {
        let valueItemStatus;
        cy.get('ol.gh-list ').children('.gh-posts-list-item').each(($el, index, $list) => {
            const texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === titlePage) {
                valueItemStatus = $el.children(`.gh-post-list-status`).text().trim();
            }

            if(index === ($list.length-1)){
                if(valueItemStatus){
                    expect(valueItemStatus).to.not.equal(status);
                }else{
                    expect("No existe el item").to.not.equal(status);
                } 
            }
        });

    }

    selectPage(value) {
        let idElemento;
        cy.wait(500)
        cy.get('ol.gh-list ').children('.gh-posts-list-item').each(($el, index, $list) => {
            let texto = $el.children('.gh-post-list-title').children('h3').text().trim();
            if (texto === value) {
                idElemento = $el.children('.gh-post-list-title').attr('id');
            }

            if(index === ($list.length-1)){
                cy.get(`#`+idElemento).click({ force: true })
            }
        })
    }

    validateExistConentPage(valueTitlePage){
        cy.get('[data-placeholder="Begin writing your page..."]').should(($p)=>{
            expect($p.first()).to.contain(valueTitlePage)
        });
    }
    

    test(valueTitlePage){
        console.log(valueTitlePage);
        cy.get('[placeholder="Page Title"]').click().type(valueTitlePage, {delay:0,force});
        cy.wait(1000);

    }

    clickBody(){
        cy.get('.gh-koenig-editor-pane').click();
    }

    wait(time){
        cy.wait(time);
    }

    selectExcerpt(value){
        cy.wait(500);
        cy.get('[name="post-setting-custom-excerpt"]').click().type(value);
        cy.wait(500);
        cy.get('.settings-menu-header-action').click();
    }
   

}
