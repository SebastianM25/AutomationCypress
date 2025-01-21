class K6ApiService {
    constructor() {
       this.baseUrl=`${Cypress.env('baseUrlK6')}`
    }

    getCrocodiles() {
        return cy.request({
            method: 'GET',
            url: this.baseUrl
        });
    }
}

export default new K6ApiService();
