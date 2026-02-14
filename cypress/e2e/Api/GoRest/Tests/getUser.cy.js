import ClientApi from '../Client/clientApi.cy';

describe('API Testing GoRest – GET users', () => {
  it('Afișează utilizatorii de pe o pagină și verifică structura răspunsului', () => {
    const pageNumber = 1;
    const perPage = 20;

    ClientApi.getUsers(`?page=${pageNumber}&per_page=${perPage}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');

      if (response.body.length > 0) {
        const firstUser = response.body[0];
        expect(firstUser).to.have.all.keys('id', 'name', 'email', 'gender', 'status');
        expect(firstUser.id).to.be.a('number');
        expect(firstUser.name).to.be.a('string');
        expect(firstUser.email).to.be.a('string');
        expect(firstUser.gender).to.be.oneOf(['male', 'female']);
        expect(firstUser.status).to.be.oneOf(['active', 'inactive']);
      }

      cy.log(`Pagina: ${pageNumber}, rezultate: ${response.body.length}`);
    });
  });

  it('Afișează un singur utilizator și verifică datele', () => {
    ClientApi.getUsers('?page=1&per_page=1').then((listResponse) => {
      expect(listResponse.status).to.eq(200);
      expect(listResponse.body.length).to.be.at.least(1);

      const userId = listResponse.body[0].id;

      ClientApi.getUser(userId).then((response) => {
        expect(response.status).to.eq(200);

        const user = response.body;
        expect(user).to.have.all.keys('id', 'name', 'email', 'gender', 'status');
        expect(user.id).to.eq(userId);
        expect(user.name).to.be.a('string');
        expect(user.email).to.be.a('string');
        expect(user.gender).to.be.oneOf(['male', 'female']);
        expect(user.status).to.be.oneOf(['active', 'inactive']);

        cy.log(`Utilizator verificat: id=${user.id}, name=${user.name}`);
      });
    });
  });
});
