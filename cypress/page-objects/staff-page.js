export class StaffPage{

    navigateToStaffPage() {
        cy.get('a').contains(`${staffMenuText}`).click();
        cy.wait(500);
    }

    clickInvitePeople() {
        cy.contains('Invite people').first().click();
    }

    fillEmail(value) {
        cy.get('#new-user-email').click().type(value);
        cy.wait(1000);
    }

    send(){
        cy.get('.fullscreen-modal .modal-footer Button').click();
    }
}
export const staffMenuText = 'Staff';