const Sequilize = require("sequelize");

const dbConfig = require("../config/database");

const User = require("../models/user");

const connection = new Sequilize(dbConfig);

User.init(connection);

module.exports = connection;
