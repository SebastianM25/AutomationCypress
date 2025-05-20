class ClientApi {
    static goRestUsers(method, body = {}) {
      const bearerToken = Cypress.env('bearerToken'); // Retrieve token from env
      const gorestBaseUrl = Cypress.env('gorestBaseUrl'); // Retrieve base URL from env
  
      return cy.request({
        method: method,
        url: `${gorestBaseUrl}/users`,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'Content-Type': 'application/json'
        },
        body: body
      });
    }
  
    static reqresUsers(method, endpoint, queryParams = '') {
      const reqresBaseUrl = Cypress.env('reqresBaseUrl'); // Retrieve base URL from env
  
      return cy.request({
        method: method,
        url: `${reqresBaseUrl}${endpoint}${queryParams}`, // Construct full URL
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1' // Optional header if required
        }
      });
    }
  }
  
  export default ClientApi;