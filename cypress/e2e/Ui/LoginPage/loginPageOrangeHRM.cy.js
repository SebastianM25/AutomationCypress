describe('We are checking the login functionality', () => {


  beforeEach(() => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  })
  it('Click on the login button with empty fields', () => {
    cy.get('button.oxd-button.orangehrm-login-button').click();
    cy.get('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
      .eq(0)
      .should('be.visible')
      .and('have.text', 'Required');
  });
  it('should not log in with invalid credentials', () => {
    cy.fixture('loginData').then((data) => {
      cy.get('input[name="username"]').type(data.invalidUser.username);
      cy.get('input[name="password"]').type(data.invalidUser.password);
      cy.get('button.oxd-button.orangehrm-login-button').click();
    });


    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate', (req) => {
      req.reply({
        statusCode: 302,
        headers: {
          location: '/web/index.php/dashboard/index'
        }
      });
    }).as('validateRequest');
  });
  it('should log in with valid credentials', () => {

    cy.fixture('loginData').then((data) => {
      cy.get('input[name="username"]').type(data.validUser.username);
      cy.get('input[name="password"]').type(data.validUser.password);
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/web/index.php/dashboard/index');
    });


  });
});
