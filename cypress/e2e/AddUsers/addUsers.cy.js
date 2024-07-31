describe('We are checking the login functionality', () => {
  beforeEach(() => {
    // Load credentials from the fixture file
    cy.fixture('credentials').then(credentials => {
      cy.auth(credentials.username, credentials.password);
    });
  });

  it('Add an admin user', () => {
    // Click on the Admin module link
    cy.get('a.oxd-main-menu-item.active[href="/web/index.php/admin/viewAdminModule"]').click();

    // Verify the URL contains the expected path
    cy.url().should('include', '/web/index.php/admin/viewSystemUsers');
  });
});
