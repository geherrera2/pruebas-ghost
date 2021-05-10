export class StaffPage {

    navigateToStaffPage() {
        cy.wait(500);
        cy.get('a').contains(`${staffMenuText}`).click({ force: true });
        cy.wait(500);
    }

    clickInvitePeople() {
        cy.contains('Invite people').first().click();
    }

    clickRevoke() {
        cy.contains('Revoke').first().click({ force: true});
    }

    fillEmail(value) {
        cy.get('#new-user-email').click().type(value);
        cy.wait(1000);
    }

    send() {
        cy.get('.fullscreen-modal .modal-footer Button').click();
    }

    clickFirstElementPage() {
        cy.get('section.gh-active-users div.apps-grid div').first().children('a').click({ force: true });
    }

    updateFullName(name) {
        cy.get('[placeholder="Full Name"]').click({ force: true }).clear().type(name);
        cy.get('.gh-btn-blue').click({ force: true });
        cy.wait(1000);
    }

    assertGhostNameUpdated() {
        cy.get('a').parent('div').should('contain', 'Saved')
    }
}
export const staffMenuText = 'Staff';