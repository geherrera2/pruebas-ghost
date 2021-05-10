
import {LoginPage} from '../page-objects/login-page';
import faker from 'faker';
import { TagPage } from '../page-objects/tag-page';

context('escenario-14-eliminar tag', () => {
    let valueNameTag = '';

    it('Crear Tag', () => {
        valueNameTag = faker.lorem.word();
        const loginPage = new LoginPage();
        const tagPage = new TagPage();

        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPage('Tags');
        tagPage.clickNewTag();
        expect('Tags').to.equal('Tags');
        tagPage.insertName(valueNameTag);
    
    })


    it('Eliminar Tag', () => {
        const loginPage = new LoginPage();
        const tagPage = new TagPage();

        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPage('Tags');
        tagPage.selectTag(valueNameTag);
        tagPage.deleteTag();
        tagPage.validateTag(valueNameTag);
    })
  })