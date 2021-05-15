export class GeneralPage {
    stepScreenshot(step,description = '', seg=1000){
        cy.wait(seg);
        cy.screenshot(`step${step}: ${description}`);
    }
}