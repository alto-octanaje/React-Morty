const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "postUser", 
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timesTamps: false,
    }
  );
};
