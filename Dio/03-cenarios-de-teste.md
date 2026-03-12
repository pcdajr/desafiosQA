## CENÁRIO 01

**[Feature]**: BASEADO NO USER STORY 01 - US01 </br>
**[Scenario]**: LOGIN COM CREDENCIAL VÁLIDA</br>
PRÉ-CONDIÇÃO: USUÁRIO CADASTRADO NO SISTEMA</br>
</br>
**[Given]**: Usuário na tela de login </br>
**[When]**: Insere o username/senha </br>
**[And]**: Clica no botão de login para entrar </br>
**[Then]**:Muda para página da loja com a lista de produtos </br>

## CENÁRIO 02

**[Feature]**: BASEADO NO USER STORY 02 - US02 </br>
**[Scenario]**: ADICIONAR AO CARRINHO</br>
PRÉ-CONDIÇÃO: USUÁRIO LOGADO NO SISTEMA</br>
</br>
**[Given]**: Usuário na tela de produtos (loja) </br>
**[When]**: Clica no botão "add to cart" do produto desejado </br>
**[And]**: Clica no botão icone/botão carrinho(cart) </br>
**[Then]**: Muda para página do carrinho </br>

## CENÁRIO 03

**[Feature]**: BASEADO NO USER STORY 03 - US03 </br>
**[Scenario]**: CHECKOUT/ FINALIZAÇÃO DE COMPRA </br>
PRÉ-CONDIÇÃO: CARRINHO PREENCHIDO COM PRODUTO SELECIONADO </br>
</br>
**[Given]**: Usuário na tela de informações/ dados de pagamento </br>
**[When]**: Insere entrada nos campos "Nome", "Sobrenome", "CEP" </br>
**[And]**: Clica no botão "continue" </br>
**[Then]**: Muda para página da overview/visão geral com a lista de produtos escolhida e clicar no botão "finish" </br>
