const sequelize = require("./db.js");
const { DataTypes, Model } = require("sequelize");

class Task extends Model {}

Task.init(
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "task",
    timestamps: false,
  }
);

module.exports = Task;
