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
        GeneralPage.stepScreenshot('01');
        loginPage.login();
        GeneralPage.stepScreenshot('02');
        staffPage.navigateToStaffPage();
        GeneralPage.stepScreenshot('03');
        staffPage.clickFirstElementPage();
        GeneralPage.stepScreenshot('04');
        staffPage.updateFullName(name);
        GeneralPage.stepScreenshot('05');
        staffPage.assertGhostNameUpdated();
        GeneralPage.stepScreenshot('06');
    })
})