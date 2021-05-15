import { LoginPage } from '../../page-objects/login-page';
import faker from 'faker';
import { StaffPage } from '../../page-objects/staff-page';


context('Scenario 16 - Staff - Edit User', () => {

    const loginPage = new LoginPage();
    const staffPage = new StaffPage();

    it('Edit admin user', () => {
        const name = faker.name.firstName();

        loginPage.visitPage();
        loginPage.login();
        staffPage.navigateToStaffPage();
        staffPage.clickFirstElementPage();
        staffPage.updateFullName(name);
        staffPage.assertGhostNameUpdated();
    })
})