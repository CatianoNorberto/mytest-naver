const { Model, DataTypes } = require("sequelize");

class Registrations extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        age: DataTypes.STRING,
        projects: DataTypes.STRING,
        office: DataTypes.STRING,
        time: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        url: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
  }
}

module.exports = Registrations;
