
import {LoginPage} from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page';
import faker from 'faker';

context('escenario-18-Editar Title', () => {
    let valueTitle = '';


    it('Update title', () => {
        valueTitle = faker.lorem.word();
        const loginPage = new LoginPage();
        const settingPage = new SettingPage();

        loginPage.visitPage();
        loginPage.login();
        loginPage.navigateToPage('General');
        settingPage.setValueTitle(valueTitle);
        settingPage.saveSetting();
        settingPage.validateTitle(valueTitle);
    })
  })