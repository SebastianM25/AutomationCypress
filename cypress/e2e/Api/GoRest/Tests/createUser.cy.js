import ClientApi from '../Client/clientApi.cy';
describe('API Testing for User Creation', () => {
  it('Create user and verify data', () => {
    const email = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(6, 15);

    cy.wrap(email).as('generatedEmail');

    ClientApi.goRestUsers('POST', {
      name: 'SebaTest2',
      email: `sebbtest${email}@block.io`,
      gender: 'male',
      status: 'active'
    }).then((response) => {
      expect(response.status).to.eq(201);

      expect(response.body.name).to.eq('SebaTest2');
      expect(response.body.email).to.eq(`sebbtest${email}@block.io`);
      expect(response.body.gender).to.eq('male');
      expect(response.body.status).to.eq('active');

      cy.get('@generatedEmail').then((generatedEmail) => {
        cy.log(`Generated email: ${generatedEmail}`);
      });
    });
  });
});