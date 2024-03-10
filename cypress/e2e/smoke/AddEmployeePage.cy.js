
describe('Smoke test on Add employee page', () => {
    before(() => {
        cy.auth();
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
        //href="/web/index.php/pim/viewPimModule"
    })

    it('Check the url', () => {

        cy.url().should('include', Cypress.env('addEmployeeUrl'));
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
    it('Check the employee information is displayed', () => {
        cy.get('div.oxd-table-filter-header')
            .should('be.visible')
    });

});
