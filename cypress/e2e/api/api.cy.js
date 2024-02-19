describe('Verificare timp de răspuns API', () => {
    it('Timpul de răspuns este sub 400ms', () => {
      cy.request('https://gorest.co.in/public/v2/users').then((response) => {
        expect(response.duration).to.be.lessThan(1000); //400
      });
    });
  
    it('Timpul de răspuns este sub 200ms', () => {
      cy.request('https://gorest.co.in/public/v2/users').then((response) => {
        expect(response.duration).to.be.lessThan(1000); //200
      });
    });
    
  });
  