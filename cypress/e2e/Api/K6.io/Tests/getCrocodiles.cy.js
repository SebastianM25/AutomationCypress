describe('Crocodile API Tests', () => {
    const baseUrl = 'https://test-api.k6.io/public/crocodiles/';

    it('should return status 200 and a valid JSON response', () => {
        cy.request(baseUrl).then((response) => {
            expect(response.status).to.eq(200);

            expect(response.duration).to.be.lessThan(800);

            expect(response.headers['content-type']).to.include('application/json');

            expect(response.body).to.not.be.empty;

            expect(response.body).to.be.an('array');

            response.body.forEach(croc => {
                expect(croc).to.have.all.keys('id', 'name', 'sex', 'date_of_birth', 'age');
            });
        });
    });
});
