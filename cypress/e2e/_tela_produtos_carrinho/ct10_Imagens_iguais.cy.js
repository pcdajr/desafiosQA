
describe('Tela de produtos - Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
   });

   it('Validando imagens dos produtos na loja', () => {

    cy.get('[data-test="username"]').type("problem_user");   //inserindo nome
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando


     cy.get('[data-test^="inventory-item"]').each((elemento, indice) => {  
            
           //continuar....

        });


    });

});