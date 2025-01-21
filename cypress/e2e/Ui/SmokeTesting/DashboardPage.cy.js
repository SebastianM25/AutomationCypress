describe('Testare URL cu interceptare', () => {
before(()=>{
    cy.auth();
})

    it('Check the URL', () => {
      // We intercept the request to navigate to the desired URL
      cy.intercept('GET', '**/dashboard/index').as('dashboardRequest');
  
      // Go to the page that leads to the desired URL
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  
      // We are waiting for the request to be intercepted
      cy.wait('@dashboardRequest').then(interception => {
        
        expect(interception.response.statusCode).to.equal(200);
  
        // We verify that the intercepted URL matches the desired URL
        expect(interception.request.url).to.equal('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
      });
  
      // We also check the current URL of the page
      cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });
  });
  