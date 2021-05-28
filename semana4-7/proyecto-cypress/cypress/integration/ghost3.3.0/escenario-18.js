
import {LoginPage} from '../../page-objects/login-page';
import { SettingPage } from '../../page-objects/setting-page';
import { GeneralPage } from '../../page-objects/general-page';
import faker from 'faker';

context('escenario-18-Editar Title', () => {
    let valueTitle = '';


    it('Update title', () => {
        valueTitle = faker.lorem.word();
        const loginPage = new LoginPage();
        const settingPage = new SettingPage();

        loginPage.visitPage();
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        loginPage.navigateToPage('General');
        GeneralPage.stepScreenshot('2');
        settingPage.setValueTitle(valueTitle);
        GeneralPage.stepScreenshot('3');
        settingPage.saveSetting();
        GeneralPage.stepScreenshot('4');
        settingPage.validateTitle(valueTitle);
    })
  })