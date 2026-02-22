![Logo](https://i.postimg.cc/qRXTZZ0z/logo-3.png)

- [Desafio QA Automação :beetle:](#desafio-qa-automação-beetle)
- [Contexto :game_die:](#contexto-game_die)
  - [Revisão de documentação :books:](#revisão-de-documentação-books)
  - [Criação de casos de teste :memo:](#criação-de-casos-de-teste-memo)
  - [Criação da automação de API :robot:](#criação-da-automação-de-api-robot)
  - [Criação da API :computer:](#criação-da-api-computer)
- [Com o que nos preocupamos :dart:](#com-o-que-nos-preocupamos-dart)
- [FAQ :question:](#faq-question)

# Desafio QA Automação :beetle:

**Seja bem-vindo ao nosso desafio de QA de automação!** :raised_hands:

*Tenha certeza de ter lido todo o documento atentamente até o final e esclarecido as dúvidas com nosso time caso surja alguma.*

Esta é a proposta de um desafio para QA com foco em automação, sinta-se a vontade para tentá-lo por completo mas ela não é obrigatória, fique a vontade para resolver o que você conseguir dentro da sua janela de tempo disponível.

:rocket: Tudo certo!?  Então vamos lá! 

# Contexto :game_die:

A campanha global de vacinação contra a Covid-19 começou, trazendo esperança de dias melhores para todos. Com isso, seu velho amigo de infância Foo Bar e sua família decidiram iniciar um planejamento para a sua próxima viagem, que será realizada quando a situação normalizar. 

Para isso, ele decidiu contar com a sua ajuda, um exímio(a) conhecedor(a) das artes obscuras da programação, para auxiliá-lo nesse desafio de construção da API.

O objetivo principal desta API é permitir o cadastro das pessoas que participarão da viagem, estipular uma meta (valor a ser guardado) a ser alcançada por cada pessoa, além de registrar o dinheiro que cada um está guardando para a viagem ao longo do tempo.

A especificação completa da API está disponível através da [documentação do Postman, disponível neste link ](https://documenter.getpostman.com/view/14414241/TW77f3WE).

## Revisão de documentação :books:
Seu objetivo aqui é realizar uma revisão da documentação disponibilizada, visando apontar possíveis pontos de problemas na especificação que estão ambíguos, incorretos ou que podem ocasionar um defeito mais a frente no ciclo de desenvolvimento.

## Criação de casos de teste :memo:
Seu objetivo aqui é construir os casos de testes que visam garantir a qualidade de todos os endpoints da API a ser desenvolvida.

## Criação da automação de API :robot:
Nesta etapa, o seu objetivo é construir testes automatizados para a API que será desenvolvida.
O framework para a construção dos testes é livre, ficando a seu critério de escolha. Apenas crie um arquivo `README.md` e adicione uma explicação de como executá-lo.

## Criação da API :computer:
Nesta etapa, o seu objetivo será implementará a API proposta na documentação, utilizando a tecnologia em [NodeJS](https://nodejs.org/en/).
Dicas:
- Você pode utilizar o framework [express](https://expressjs.com/pt-br/) para a construção da API;
- Você não precisa utilizar um mecanismo de persistencia dos dados (banco de dados ou arquivos), o seu código pode manter todas as informações em memória (listas de pessoas e receitas) para facilitar a implementação;
- O seu arquivo `package.json` deve possuir um script chamado `start` que inicie a API. Por exemplo:
```
{
  "name": "minha-primeira-api",
  "version": "0.0.1",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "node index.js",
  }
}
```

# Com o que nos preocupamos :dart:
- Primeiramente em deixar claro que o desafio não tem caráter de eliminação;
- Com certeza muito mais do que o desafio completo é avaliarmos suas competências e habilidades até o ponto em que chegou. Procure demonstrar o seu conhecimento, sem medo de errar ou ser criticado, buscamos apenas conhecer você e a sua forma de pensar. Você pode utilizar o arquivo `README.md` do seu projeto também para explicar algum detalhe de interpretação ou demonstrar o seu ponto de vista em relação à algum detalhe da específicação que não esteja claro;
- O que buscamos entender com este desafio é: sua habilidade em analisar e revisar documentação, sua habilidade de derivar casos de teste, sua habilidade de automatizar testes de API e sua habilidade de programação;
- Sabemos que nem todos temos o mesmo tempo disponível, então como dissemos fique a vontade para ir até onde conseguir ou solicitar mais tempo para o processo, transparência total.


# FAQ :question:
> Como devo fazer a entrega do desafio?

- Envie o link do seu repositório de código particular para quem te fez a solicitação de execução desse desafio.

> Se eu tiver dúvidas?
- Entre em contato com nosso time que esta te apoiando no processo seletivo ou pelo rh@maxxidata.com.

[Voltar ao topo](#desafio-qa-automação-beetle)
