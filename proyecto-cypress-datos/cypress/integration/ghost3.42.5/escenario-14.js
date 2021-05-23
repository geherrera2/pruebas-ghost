
import {LoginPage} from '../../page-objects/login-page';
import faker from 'faker';
import { TagPage } from '../../page-objects/tag-page';
import { GeneralPage } from '../../page-objects/general-page';

context('escenario-14-eliminar tag', () => {
    let valueNameTag = '';

    it('Crear Tag', () => {
        valueNameTag = faker.lorem.word();
        const loginPage = new LoginPage();
        const tagPage = new TagPage();

        loginPage.visitPage();
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        loginPage.navigateToPage('Tags');
        GeneralPage.stepScreenshot('2');
        tagPage.clickNewTag();
        GeneralPage.stepScreenshot('3');
        expect('Tags').to.equal('Tags');
        tagPage.insertName(valueNameTag);
        
    })


    it('Eliminar Tag', () => {
        const loginPage = new LoginPage();
        const tagPage = new TagPage();

        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPage('Tags');
        GeneralPage.stepScreenshot('4');
        tagPage.selectTag(valueNameTag);
        GeneralPage.stepScreenshot('5');
        tagPage.deleteTag();
        GeneralPage.stepScreenshot('6');
        tagPage.validateTag(valueNameTag);
    })
  })