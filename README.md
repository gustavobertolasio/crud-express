# crud-express

Esse projeto foi criado para ser as regras e lógica por trás de uma plataforma de criação de times Pokémon.

Utiliza ExpressJS e foi criado em Node 18.17.1.

Este projeto possui seu front-end chamado crud.

## Pré-requisitos

Para rodar esse projeto adequadamente, você precisará dos seguintes requisitos instalados em seu computador

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Docker](https://www.docker.com/get-started/)

## Instalação

* Clone o repositório com a URL disponível no github;
* Certifique-se de que seu terminal se encontra na raiz do diretório do repositório clonado;
* Com o repositório devidamente clonado, rode `npm install` dentro do diretório;
* Após o término da instalação de dependências, rode `docker compose up -d`. Este passo deverá criar um container com uma instância de banco de dados PostgreSQL, bem como pré-popular a tabela de Pokémons com dez registros utilizando o arquivo [Init] (init.sql) .
* Após o termino do comando docker, rode `node src/app.js`. O servidor deverá ser aberto na url `http://localhost:3000`

## Banco de dados
* Caso deseje acessar o banco de dados, as credenciais estão dentro do arquivo [Config] (src\config\db.config.js). O banco é acessível com qualquer ferramenta com extensão PostgreSQL.
