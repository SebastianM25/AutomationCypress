describe('Testare API pentru crearea utilizatorului', () => {
    it('Creare utilizator și verificare date', () => {
      // Generează un email și un id aleatoriu
      const email = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(6, 15);
      const id = Math.floor((Math.random() * 1000) + 1);
      const bearerToken='0c9c40d945079e2b1f6763d190da596ef3a71d334f79f07902dce75df50ccc99';
  
      // Salvează email-ul și id-ul în variabile globale Cypress
      cy.wrap(email).as('generatedEmail');
      cy.wrap(id).as('generatedId');
  
      // Efectuează solicitarea POST pentru a crea utilizatorul
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
        // Asigură-te că solicitarea a avut succes
        expect(response.status).to.eq(201);
  
        // Verifică că datele utilizatorului create sunt corecte
        expect(response.body.data.name).to.eq('SebaTest2');
        expect(response.body.data.email).to.eq(`sebbtest${email}@block.io`);
        expect(response.body.data.gender).to.eq('male');
        expect(response.body.data.status).to.eq('inactive');
  
        // Accesează variabilele globale Cypress pentru email și id
        cy.get('@generatedEmail').then((generatedEmail) => {
          cy.get('@generatedId').then((generatedId) => {
            // Poți adăuga aici orice verificări suplimentare pentru email și id
            // În acest exemplu, doar afișăm aceste valori în consolă
            cy.log(`Email generat: ${generatedEmail}`);
            cy.log(`Id generat: ${generatedId}`);
          });
        });
      });
    });
  });
  