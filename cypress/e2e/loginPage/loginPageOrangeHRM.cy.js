describe('We are checking the login functionality', () => {
   before (()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   })
   it('Click on the login button with empty fields', () => {
    // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     cy.get('button.oxd-button.orangehrm-login-button').click();
     cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .eq(0)
        .should('be.visible')
        .and('have.text', 'Required');
  });
  it('Login page with invalid credentials', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type("AdminWrong");
    cy.get('input[name="password"]').type("admin125");
    cy.get('button.oxd-button.orangehrm-login-button').click();
    
    // Assertion for error message or behavior after login attempt with invalid credentials
    //cy.get('div.toast-message').should('be.visible').and('contain', 'Invalid credentials');
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate', (req) => {
    req.reply({
      statusCode: 302,
      headers: {
        location: '/web/index.php/dashboard/index' // Redirect location
      }
    });
  }).as('validateRequest');
 });
   it('Login page with valid credentials', () => {
      cy.get('input[name="username"]').type("Admin");
      cy.get('input[name="password"]').type("admin123");
      cy.get('button.oxd-button.orangehrm-login-button').click();
      cy.url().should('include', '/web/index.php/dashboard/index');
   });
});
