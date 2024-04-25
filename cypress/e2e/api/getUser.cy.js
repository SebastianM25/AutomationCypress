describe('Verificare timp de răspuns API', () => {
  it('Display all users from page 2', () => {
    cy.request('https://reqres.in/api/users?page=2').then((response) => {
      expect(response.status).to.equal(200);
      // Verify the structure of the response body
      expect(response.body).to.have.property('page').that.is.a('number');
      expect(response.body).to.have.property('per_page').that.is.a('number');
      expect(response.body).to.have.property('total').that.is.a('number');
      expect(response.body).to.have.property('total_pages').that.is.a('number');

      // Verify the values of specific properties
      expect(response.body.page).to.equal(2);
      expect(response.body.per_page).to.equal(6);
      expect(response.body.total).to.equal(12);
      expect(response.body.total_pages).to.equal(2);
    });
  });

  it('Display just a single user', () => {
    cy.request('https://reqres.in/api/users/2').then((response) => {
      // Verify the response status
      expect(response.status).to.equal(200);

      // Verify the structure of the response body
      expect(response.body).to.have.property('data').that.is.an('object');
      expect(response.body.data).to.have.property('id').that.is.a('number');
      expect(response.body.data).to.have.property('email').that.is.a('string');
      expect(response.body.data).to.have.property('first_name').that.is.a('string');
      expect(response.body.data).to.have.property('last_name').that.is.a('string');
      expect(response.body.data).to.have.property('avatar').that.is.a('string');

      // Verify the values of specific properties
      expect(response.body.data.id).to.equal(2);
      expect(response.body.data.email).to.equal('janet.weaver@reqres.in');
      expect(response.body.data.first_name).to.equal('Janet');
      expect(response.body.data.last_name).to.equal('Weaver');
      expect(response.body.data.avatar).to.equal('https://reqres.in/img/faces/2-image.jpg');
    });
  });

});
