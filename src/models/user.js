// Importando o Sequelize Model e os DataTypes necessários
const { Model, DataTypes } = require("sequelize");

// Definindo a classe User, que herda de Model
class User extends Model {
  // Método estático para inicializar o modelo
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );
  }
}
