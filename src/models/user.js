const { Model, Datatypes } = require("sequelize");

class User extends Model {
    static init(connection) {
        super.init(
            {
                name: Datatypes.String,
                email: Datatypes,
            },
            {
                sequelize: connection,
            }
        );
    }
}
