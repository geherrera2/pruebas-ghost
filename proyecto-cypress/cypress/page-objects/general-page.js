export class GeneralPage {
    
    static stepScreenshot(step, seg=1000){
        cy.wait(seg);
        cy.screenshot(`step0${step}`);
    }
}