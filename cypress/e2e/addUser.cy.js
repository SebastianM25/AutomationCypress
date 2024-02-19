describe('We are checking the login functionality', () => {
  beforeEach(() => {
    cy.fixture('credentials').then(credentials => {
      cy.auth(credentials.username, credentials.password);
    });
  });


    it('Add an admin user', () => {
      cy.get('button.oxd-button.orangehrm-login-button').click();
      cy.contains('Admin').click();
      cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

      
       
       
    })
    
   /*  it('Add an ess user', () => {
       
 
    }) */
 })
 