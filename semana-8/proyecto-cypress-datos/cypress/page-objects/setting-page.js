import faker from 'faker';

export class SettingPage {
    setValueTitle(value) {
        cy.get('button').contains('Expand').eq(0).click({ force: true })
        cy.wait(500);
        cy.get('input.gh-input').eq(0).click({ force: true }).clear().type(value);
    }

    saveSetting() {
        cy.wait(500);
        cy.get('.gh-canvas-header button.gh-btn-blue').click({ force: true });
    }

    validateTitle(value) {
        cy.wait(500);
        cy.get('.gh-nav-menu-details-blog').should('contain', value);
    }

    navigateToGeneralSettings() {
        cy.wait(500);
        cy.get('a[href*="#/settings/general/"]').click({ force: true });
    }

    expandTitleAndDescription() {
        cy.wait(500);
        cy.get('button.gh-btn').each(($el, index, $list) => {
            if (index === 1) {
                cy.wrap($el).click({ force: true });
            }
        });
    }

    expandMetaData() {
        cy.wait(500);
        cy.get('button.gh-btn').each(($el, index, $list) => {
            if (index === 5) {
                cy.wrap($el).click({ force: true });
            }
        });
    }

    expandTwitterCard() {
        cy.wait(500);
        cy.get('button.gh-btn').each(($el, index, $list) => {
            if (index === 6) {
                cy.wrap($el).click({ force: true });
            }
        });
    }

    expandFacebookCard() {
        cy.wait(500);
        cy.get('button.gh-btn').each(($el, index, $list) => {
            if (index === 7) {
                cy.wrap($el).click({ force: true });
            }
        });
    }

    expandSocialAccounts() {
        cy.wait(500);
        cy.get('button.gh-btn').each(($el, index, $list) => {
            if (index === 8) {
                cy.wrap($el).click({ force: true });
            }
        });
    }

    updateNameOfYourSite(title) {
        cy.wait(500);
        cy.get('div.gh-setting-content-extended')
            .children('div')
            .first()
            .children('input')
            .click({ force: true })
            .clear()
            .type(title);
    }

    updateSiteDescription(description) {
        cy.wait(500);
        cy.get('div.gh-setting-content-extended')
            .children('div.description-container')
            .children('input')
            .click({ force: true })
            .clear()
            .type(description);
    }

    updateMetaTitle(title) {
        cy.wait(500);
        cy.get('div.gh-setting-content-extended')
            .children('div.flex.flex-column.flex-row-ns')
            .children('div.flex-basis-1-2-m.flex-basis-2-3-l.mr5')
            .children('div.form-group.ember-view')
            .children('input')
            .click({ force: true })
            .clear()
            .type(title);
    }

    updateMetaDescription(description) {
        cy.wait(500);
        cy.get('div.gh-setting-content-extended')
            .children('div.flex.flex-column.flex-row-ns')
            .children('div.flex-basis-1-2-m.flex-basis-2-3-l.mr5')
            .children('div.form-group.ember-view')
            .each(($el, index, $list) => {
                if (index === 1) {
                    cy.wrap($el)
                        .children('textarea')
                        .click({ force: true })
                        .clear()
                        .type(description);
                }
            })
    }

    updateTwitterTitle(title) {
        cy.wait(500);
        cy.get('div.flex-basis-1-2-m.flex-basis-2-3-l.mr5.nudge-top--7')
            .children('div.form-group.ember-view')
            .each(($el, index, $list) => {
                if (index === 1) {
                    cy.wrap($el)
                        .children('input')
                        .click({ force: true })
                        .clear()
                        .type(title);
                }
            });
    }

    updateTwitterDescription(description) {
        cy.wait(500);
        cy.get('div.flex-basis-1-2-m.flex-basis-2-3-l.mr5.nudge-top--7')
            .children('div.form-group.ember-view')
            .each(($el, index, $list) => {
                if (index === 2) {
                    cy.wrap($el)
                        .children('textarea')
                        .click({ force: true })
                        .clear()
                        .type(description);
                }
            });
    }

    updateFacebookTitle(title) {
        cy.wait(500);
        cy.get('div.flex-basis-1-2-m.flex-basis-2-3-l.mr5.nudge-top--7')
            .children('div.form-group.ember-view')
            .each(($el, index, $list) => {
                if (index === 1) {
                    cy.wrap($el)
                        .children('input')
                        .click({ force: true })
                        .clear()
                        .type(title);
                }
            });
    }

    updateFacebookDescription(description) {
        cy.wait(500);
        cy.get('div.flex-basis-1-2-m.flex-basis-2-3-l.mr5.nudge-top--7')
            .children('div.form-group.ember-view')
            .each(($el, index, $list) => {
                if (index === 2) {
                    cy.wrap($el)
                        .children('textarea')
                        .click({ force: true })
                        .clear()
                        .type(description);
                }
            });
    }

    updateFacebookPageUrl(url) {
        cy.wait(500);
        cy.get('div.gh-setting-content-extended')
            .children('div')
            .each(($el, index, $list) => {
                if (index === 0) {
                    cy.wrap($el)
                        .children('input')
                        .click({ force: true })
                        .clear()
                        .type(url);
                }
            });
    }

    updateTwitterProfileUrl(url) {
        cy.wait(500);
        cy.get('div.gh-setting-content-extended')
            .children('div')
            .each(($el, index, $list) => {
                if (index === 1) {
                    cy.wrap($el)
                        .children('input')
                        .click({ force: true })
                        .clear()
                        .type(url);
                }
            });
    }

    validateSave() {
        cy.wait(500);
        cy.get('.gh-canvas-header button.gh-btn-blue')
            .click({ force: true })
            .should('contain', 'Saved');
    }

}