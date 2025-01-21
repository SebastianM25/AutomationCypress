class K6ApiService {
    constructor() {
        this.baseUrl = `${Cypress.env('baseUrlK6')}`
    }

    getCrocodiles() {
        return cy.request({
            method: 'GET',
            url: `${this.baseUrl}public/crocodiles/`
        });
    }

    registerUser(userData) {
        return cy.request({
            method: 'POST',
            url: `${this.baseUrl}user/register/`,
            body: userData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}


export default new K6ApiService();
