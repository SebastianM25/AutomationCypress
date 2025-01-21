
describe('Smoke test on Admin page', () => {
    before(() => {
        cy.auth();
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
    })

    it('Check the url', () => {
       
        cy.url().should('include', Cypress.env('adminPageUrl'));
    });

    it('Check the search button is displayed', () => {
        cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space')
            .should('be.visible');
    });
    it('Check the add button is displayed', () => {
        cy.get('button.oxd-button').should('be.visible');
    });
    it('Check the reset button is displayed', () => {
        cy.get('button.oxd-button')
            .contains('Reset')
            .should('be.visible');
    });
    it('Check the system users is displayed', () => {
        cy.get('div.oxd-table-filter-header')
            .should('be.visible')
    });
});
