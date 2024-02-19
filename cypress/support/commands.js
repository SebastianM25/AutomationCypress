// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/* Cypress.Commands.add('auth',()=>{
    cy.session([Cypress.config('email'),Cypress.env('password')],()=>{
        cy.visit(Cypress.config('auth_url'));
        cy.get('#email').type(Cypress.env('email'));
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#submit').click();
    })
}) */

/* cy.session([username, password], ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type(username);
      cy.get('input[name="password"]').type(password);
      cy.get('button.oxd-button.orangehrm-login-button').click();
}) */
// commands.js
Cypress.Commands.add('auth', (username, password) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Sau puteți folosi calea către pagina de autentificare
    cy.get('input[name="username"]').type(Cypress.env('username'));
    cy.get('input[name="password"]').type(Cypress.env('password'));
    cy.get('button.orangehrm-login-button').click();
   //cy.visit('http://google.com')
});
