describe('Página de login Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); 
  });

  it('Usuário válido sob perfomance ', () => { 
    cy.get('[data-test="username"]').type("performance_glitch_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
     
    
  })
}) 