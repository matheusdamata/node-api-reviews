# NODE-API CRUD COMPLET
Back-end desenvolvido para criar, ler, editar e deletar frases!

<b>Banco de dados</b>: MySQL<br />
<b>Cliente</b>: DBeaver 22.2.0<br />

Rotas:
POST <b>/phrases</b> - Inseri uma nova frase com o body (author, txt).<br />
GET <b>/phrases</b> - Retorna todas às frases inseridas na db.<br />
GET <b>/phrases/:id</b> - Retorna a frase selecionada através do ID enviado.<br />
PUT <b>/phrase/:id</b> - Realiza o update em uma frase através do ID enviado.<br />
DEL <b>/phrase/:id</b> - Deleta a frase que o ID foi enviado.<br />

Extra:
GET <b>/phrase/random</b> - Retorna uma frase aleatória.

### Pré-requisitos globais:
`npm i -g nodemon typescript ts-node`

### Instalação
`npm install`

### Para rodar o projeto
`npm run start-dev`
