# 02-API-REST-NodeJS

Este projeto é uma API REST criada com **Node.js** e **Fastify**, utilizando o banco de dados **SQLite** com **Knex.js** para gerenciamento de migrations.

---

## 🚀 Tecnologias

- **Node.js**
- **Fastify**
- **Knex.js**
- **SQLite**
- **TypeScript**

---

## 📂 Estrutura do Projeto

```plaintext
├── src
│   ├── database
│   │   └── database.ts   # Configuração do banco de dados
│   ├── migrations        # Arquivos de migrations gerados pelo Knex
│   ├── routes
│   │   └── hello.ts      # Exemplo de rota /hello
│   └── server.ts         # Inicialização do servidor
├── tmp                   # Arquivos temporários, incluindo o banco SQLite
├── knexfile.ts           # Configuração do Knex.js
└── package.json          # Dependências e scripts do projeto
```

## 🛠️ Configuração e Uso
1. Clonando o repositório:
   ```
   git clone git@github.com:Caarlos7x/02-api-rest-nodejs.git
   cd 02-api-rest-nodejs
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute as migrations:
  ```
  npm run knex -- migrate:latest
  ```
4. Inicie o servidor:
   ```
   npm run dev
    ```
5. Teste a rota de exemplo:
Acesse a rota http://localhost:3333/hello no navegador ou no Postman para verificar o funcionamento.


##📜 Scripts Disponíveis
npm run dev: Inicia o servidor em modo de desenvolvimento.
npm run knex: Executa comandos do Knex.js, como migrate:make e migrate:latest.



##📘 Documentação das Rotas
GET /hello
Retorna uma mensagem de exemplo:

```
{
  "message": "Hello, Fastify!"
}
```
## 📝 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo.

## ✨ Contato
Autor: Carlos (Caarlos7x)
GitHub: Caarlos7x



