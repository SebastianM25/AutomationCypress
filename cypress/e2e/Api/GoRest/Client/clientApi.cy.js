class ClientApi {
    static goRestUsers(method, body = {}) {
      const bearerToken = Cypress.env('bearerToken'); 
      const gorestBaseUrl = Cypress.env('gorestBaseUrl'); 
  
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
      const reqresBaseUrl = Cypress.env('reqresBaseUrl'); 
  
      return cy.request({
        method: method,
        url: `${reqresBaseUrl}${endpoint}${queryParams}`, 
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1' 
        }
      });
    }
  }
  
  export default ClientApi;