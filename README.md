# Employees App back-end

Uma API feita em Node.js e MongoDB para um aplicativo de lista de funcionários <3

## Introdução

Este projeto foi realizado como um teste técnico para a seleção de vaga front-end na empresa [Nutcache](https://www.nutcache.com/).
Todo o processo de desenvolvimento demorou certa de 4 dias, com início oficial no dia 17/08/2021 e finalização no dia 20/08/2021.

A aplicação consiste em uma lista de funcionários, sendo necessária a implementação de uma interface front-end e de um serviço back-end associado.

O front-end da aplicação pode ser encontrado neste repositório: [https://github.com/FactorMouk/nutcache-challenge-joaovitoroliveira-frontend](https://github.com/FactorMouk/nutcache-challenge-joaovitoroliveira-frontend)

## Ambiente de desenvolvimento

As ferramentas utilizadas para o desenvolvimento da aplicação são listadas abaixo:

- [VSCode](https://code.visualstudio.com/) como IDE;
- [ESLint](https://eslint.org/) como linter de código;
- [Prettier](https://prettier.io/) para uma melhor identação de código.

## Setup

Para o back-end, foi escolhida a biblioteca [Node.js](https://nodejs.org) como base principal, sendo utilizados também outras bibliotecas para o desenvolvimento das soluções, os quais são listados abaixo:

- [Express](https://expressjs.com/pt-br/) para geração de um serviço de API CRUD;
- [MongoDB](https://www.mongodb.com/pt-br) para a criação de um banco de dados não-relacional.

## Rodando o projeto localmente

Antes de tudo, tenha certeza que o [Node](https://nodejs.org/en/) e o [NPM](https://www.npmjs.com/) estejam instalados em sua máquina.

Para rodar o projeto em seu ambiente de desenvolvimento, primeiro, clone este repositório na branch `main`.

Em seguida, já no diretório baixado, rode o comando `npm install` para a instalação dos pacotes.

Por fim, rode o comando `npm start` para iniciar o projeto localmente em seu navegador principal.

## Roteiro de desenvolvimento

Foi seguido, para fins de organização de versão do Git, o fluxo de trabalho do GitFlow. Para mais informações sobre o mesmo, acesse [este link](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow).

Primeiramente, foi escolhido o padrão MVC para a construção da API.

<img src="https://drive.google.com/uc?export=view&id=14qmODwCnwJ4sudv8sY9BnRql0XhTWhv-">

- `assets`: Contém todos os assets da aplicação, como imagens e ícones;
- `components`: Contém todos os componentes principais da aplicação;
- `facades`: Contém os arquivos JS de configuração de facades de conexão dos componentes com os serviços da API. Para mais informações sobre este Padrão de Projeto, acesse [este link](https://refactoring.guru/pt-br/design-patterns/facade);
- `controllers`: Contém as Controllers do MVC;
- `models`: Contém os Models do MVC;
- `views`: Não utilizado, estando aqui apenas para manter o padrão;
- `routes`: Contém as rotas do CRUD.

## Deploy

A aplicação está rodando em produção neste link: [http://nutcache-challenge-backend.herokuapp.com/](http://nutcache-challenge-backend.herokuapp.com/).
O container Heroku está configurado para build e deploy automático a cada novo commit na branch `main`.

Caso acesse este link, tenha em vista que, por ser um container gratuito, o primeiro carregamento pode demorar um pouco, pois o Heroku "adormece" um container que passou certo tempo sem ser utilizado. Tal demora não tem conexão direta com o desempenho do aplicativo.

