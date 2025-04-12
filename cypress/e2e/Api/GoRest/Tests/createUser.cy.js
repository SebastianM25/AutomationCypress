describe('API Testing for User Creation', () => {
  it('Create user and verify data', () => {
    // Here generate random email and id
    const email = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(6, 15);
    const id = Math.floor((Math.random() * 1000) + 1);
    const bearerToken='0c9c40d945079e2b1f6763d190da596ef3a71d334f79f07902dce75df50ccc99';

    // Save email and id as Cypress global variables
    cy.wrap(email).as('generatedEmail');
    cy.wrap(id).as('generatedId');

    // Make POST request to create user
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json',  // Include any other required headers
      },
      body: {
        name: 'SebaTest2',
        email: `sebbtest${email}@block.io`,
        gender: 'male',
        status: 'inactive'
      }
    }).then((response) => {
      // Ensure the request was successful
      expect(response.status).to.eq(201);

      // Check if the response contains user data
      if (response.body && response.body.hasOwnProperty('data')) {
        // Verify the created user's data
        expect(response.body.data.name).to.eq('SebaTest5');
        expect(response.body.data.email).to.eq(`sebbtest${email}@block.io`);
        expect(response.body.data.gender).to.eq('male');
        expect(response.body.data.status).to.eq('inactive');
      } else {
        // Log an error message if user data is not found in the response
        cy.log('User data not found in API response.');
      }

      // Access Cypress global variables for email and id
      cy.get('@generatedEmail').then((generatedEmail) => {
        cy.get('@generatedId').then((generatedId) => {
          cy.log(`Generated email: ${generatedEmail}`);
          cy.log(`Generated id: ${generatedId}`);
        });
      });
    });
  });
});
