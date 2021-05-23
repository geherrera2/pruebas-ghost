import { LoginPage } from '../../page-objects/login-page';
import faker from 'faker';
import { StaffPage } from '../../page-objects/staff-page';
import { GeneralPage } from '../../page-objects/general-page';


context('Scenario 16 - Staff - Edit User', () => {

    const loginPage = new LoginPage();
    const staffPage = new StaffPage();

    it('Edit admin user', () => {
        const name = faker.name.firstName();

        loginPage.visitPage();
        GeneralPage.stepScreenshot('1');
        loginPage.login();
        GeneralPage.stepScreenshot('2');
        staffPage.navigateToStaffPage();
        GeneralPage.stepScreenshot('3');
        staffPage.clickFirstElementPage();
        GeneralPage.stepScreenshot('4');
        staffPage.updateFullName(name);
        GeneralPage.stepScreenshot('5');
        staffPage.assertGhostNameUpdated();
        GeneralPage.stepScreenshot('6');
    })
})