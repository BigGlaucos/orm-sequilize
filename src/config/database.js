// Exportando as configurações do banco de dados
module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "aluno_medio",
  password: "@lunoSenai23.",
  database: "sequelize",
  define: {
    timestamps: true,
    underscored: true,
  },
};

// Exportando o modelo User
module.exports = User;
