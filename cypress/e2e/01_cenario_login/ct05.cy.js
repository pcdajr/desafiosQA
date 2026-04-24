describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); 
  });

  it('Usuário Fake - sem cadastrado no sistema', () => { 
   cy.get('[data-test="username"]').type("paulo");
    cy.get('[data-test="password"]').type("1234");
    cy.get('[data-test="login-button"]').click();
     
    
  })
}) 