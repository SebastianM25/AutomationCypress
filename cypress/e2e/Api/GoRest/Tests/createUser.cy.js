import ClientApi from '../Client/clientApi.cy';

describe('API Testing GoRest – POST create user', () => {
  it('Creează utilizator și verifică datele', () => {
    const emailSuffix = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 10);
    const userPayload = {
      name: 'SebaTest2',
      email: `sebbtest.${emailSuffix}@block.io`,
      gender: 'male',
      status: 'active',
    };

    cy.wrap(userPayload.email).as('generatedEmail');

    ClientApi.createUser(userPayload).then((response) => {
      expect(response.status).to.eq(201);

      expect(response.body).to.have.property('id');
      expect(response.body.name).to.eq(userPayload.name);
      expect(response.body.email).to.eq(userPayload.email);
      expect(response.body.gender).to.eq(userPayload.gender);
      expect(response.body.status).to.eq(userPayload.status);

      cy.get('@generatedEmail').then((email) => cy.log(`Email creat: ${email}`));
    });
  });
});