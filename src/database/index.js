// Importando a biblioteca Sequelize
const Sequelize = require("sequelize");

// Importando as configurações do banco de dados do arquivo ../config/database.js
const dbConfig = require("../config/database");

// Importando o modelo User definido no arquivo ../models/user.js
const User = require("../models/user");

// Criando uma nova instância de conexão com o banco de dados usando as configurações
const connection = new Sequelize(dbConfig);

// Inicializando o modelo User com a conexão ao banco de dados
User.init(connection);

// Exportando a conexão configurada com o banco de dados
module.exports = connection;
