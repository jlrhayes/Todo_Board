const sequelize = require("./db.js");
const { DataTypes, Model } = require("sequelize");

class Board extends Model {}

Board.init(
  {
    title: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "board",
    timestamps: false,
  }
);

module.exports = Board;
