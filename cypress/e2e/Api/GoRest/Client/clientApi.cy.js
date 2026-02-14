/**
 * GoRest REST API client – GET și POST pentru /users
 * Base URL: https://gorest.co.in/public/v2
 * Auth: Bearer token (Cypress.env('bearerToken'))
 */
const getHeaders = () => ({
  Authorization: `Bearer ${Cypress.env('bearerToken')}`,
  'Content-Type': 'application/json',
});

class ClientApi {
  static get baseUrl() {
    return Cypress.env('gorestBaseUrl');
  }

  /** GET /users – listă utilizatori (opțional: ?page=1&per_page=20) */
  static getUsers(queryParams = '') {
    const url = queryParams
      ? `${this.baseUrl}/users${queryParams.startsWith('?') ? queryParams : `?${queryParams}`}`
      : `${this.baseUrl}/users`;
    return cy.request({
      method: 'GET',
      url,
      headers: getHeaders(),
    });
  }

  /** GET /users/:id – un singur utilizator */
  static getUser(userId) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/users/${userId}`,
      headers: getHeaders(),
    });
  }

  /** POST /users – creează utilizator */
  static createUser(body) {
    return cy.request({
      method: 'POST',
      url: `${this.baseUrl}/users`,
      headers: getHeaders(),
      body,
    });
  }
}

export default ClientApi;
