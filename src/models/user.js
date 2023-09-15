// Importando o Sequelize Model e os DataTypes necessários
const { Model, DataTypes } = require("sequelize");

// Definindo a classe User, que herda de Model
class User extends Model {
    // Método estático para inicializar o modelo User
    static init(connection) {
        super.init(
            {
                name: DataTypes.STRING, // Campo de nome do usuário (tipo STRING)
                email: DataTypes.STRING, // Campo de e-mail do usuário (tipo STRING)
            },
            {
                sequelize: connection, // Conexão Sequelize passada como parâmetro
            }
        );
    }
}
