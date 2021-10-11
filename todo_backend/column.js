const sequelize = require("./db.js");
const { DataTypes, Model } = require("sequelize");

class Column extends Model {}

Column.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "column",
    timestamps: false,
  }
);

module.exports = Column;
