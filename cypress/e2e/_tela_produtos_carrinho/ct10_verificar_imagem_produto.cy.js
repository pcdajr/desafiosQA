
describe('Tela de produtos - Saucedemo', () => {

   beforeEach(() => {
    cy.visit('/'); // antes do caso teste, visitando a url.
   });

   it('Validando imagens dos produtos na loja', () => {

    cy.get('[data-test="username"]').type("problem_user");   //inserindo nome
    cy.get('[data-test="password"]').type("secret_sauce");    //inserindo senha   
    cy.get('[data-test="login-button"]').click();             //clicando


     const imagemProduto = 'https://www.saucedemo.com/static/media/sl-404.168b1cce10384b857a6f.jpg' ;

     cy.get('[data-test^="inventory-item"]').each((elemento, indice) => {   
        cy.wrap(elemento)
        .find('img')
        .invoke('attr','src')               //pegando atributo source para usar na comparação com a url da img.
        .then((src) =>{                     // o then captura e converte, pois o invoke é assíncrono e só retorna texto.
            expect(src).not.to.equal(imagemProduto); 
        }); 

        });

    });

});