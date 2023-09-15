// Exportando as configurações do banco de dados
module.exports = {
    dialect: "mysql", // Tipo de banco de dados (MySQL)
    host: "localhost", // Host do banco de dados
    username: "aluno_medio", // Nome de usuário do banco de dados
    password: "@lunoSenai23.", // Senha do banco de dados
    database: "sequelize", // Nome do banco de dados
    define: {
        timestamps: true, // Habilita timestamps (created_at e updated_at) nas tabelas
        underscored: true, // Usa o formato underscored para nomes de colunas no banco de dados
    },
};

// Exportando o modelo User
module.exports = User;
