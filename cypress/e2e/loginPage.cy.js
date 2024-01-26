describe('Login Page Tests', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('/');
  });
  const user = Cypress.env('user');
  const password = Cypress.env('password');
  it('should login with valid credentials', () => {
    // Enter valid username and password
    cy.get('#email').type(user);
    cy.get('#password').type(password);

    // Click the login button
    cy.get('#submitLoginBtn').click();

    cy.get('#message').should('contain.text', 'admin@admin.com, you have successfully logged in!');


    // Optionally, you can add more assertions or interactions specific to a successful login
  });

  it('should display an error message with invalid credentials', () => {
    // Enter invalid username and password
    cy.get('#email').type('invalid_user');
    cy.get('#password').type('invalid_password');

    // Click the login button
    cy.get('#submitLoginBtn').click();

    // Assert that an error message is displayed
    cy.get('#message').should('contain.text', 'Bad credentials! Please try again! Make sure that you\'ve registered.');

    // Optionally, you can add more assertions or interactions specific to an unsuccessful login
  });
  it('should display an error message with empty field and click on the login button', () => {
    // Enter invalid username and password
    cy.get('#email').type('  ');
    cy.get('#password').type('  ');

    // Click the login button
    cy.get('#submitLoginBtn').click();

    // Assert that an error message is displayed
    cy.get('#message').should('contain.text', 'Bad credentials! Please try again! Make sure that you\'ve registered.');

  });
});
