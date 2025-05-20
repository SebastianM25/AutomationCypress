describe('API Testing pentru Verificare timp de răspuns', () => {
  it('Afișează toți utilizatorii de pe pagina 2 și verifică structura răspunsului', () => {
    const pageNumber = 2;
    cy.wrap(pageNumber).as('pageNumber');

    // 👉 Fără token aici
    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/users?page=${pageNumber}`,
      headers: {
        'Content-Type': 'application/json',
         'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.all.keys('page', 'per_page', 'total', 'total_pages', 'data','support');
      expect(response.body.page).to.eq(pageNumber);
      expect(response.body.per_page).to.eq(6);
      expect(response.body.total).to.eq(12);
      expect(response.body.total_pages).to.eq(2);

      cy.get('@pageNumber').then((page) => cy.log(`Pagina: ${page}`));
    });
  });

  it('Afișează un singur utilizator și verifică datele', () => {
    const userId = 2;
    cy.wrap(userId).as('userId');

    cy.request({
      method: 'GET',
      url: `https://reqres.in/api/users/${userId}`,
      headers: {
        'Content-Type': 'application/json',
         'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);

      const data = response.body.data;
      expect(data).to.have.all.keys('id', 'email', 'first_name', 'last_name', 'avatar');
      expect(data.id).to.eq(userId);
      expect(data.email).to.eq('janet.weaver@reqres.in');
      expect(data.first_name).to.eq('Janet');
      expect(data.last_name).to.eq('Weaver');
      expect(data.avatar).to.eq('https://reqres.in/img/faces/2-image.jpg');

      cy.get('@userId').then((id) => cy.log(`ID tested: ${id}`));
    });
  });
});
