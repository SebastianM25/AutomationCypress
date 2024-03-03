describe('Testare URL cu interceptare', () => {
    before(() => {
        cy.auth();
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
    })

    it('Check the url', () => {
        cy.url().should('include', '/admin/viewSystemUsers');
    });

    it('Check the search button is displayed', () => {
        cy.get('button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space')
            .should('be.visible');
    });
    it('Check the add button is displayed', () => {
        cy.get('button.oxd-button').should('be.visible');
    });
});
