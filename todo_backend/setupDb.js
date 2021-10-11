const sequelize = require("./db");
const User = require("./User");
const Board = require("./Board");
const Column = require("./Column");
const Task = require("./Task");

async function setupDb() {
  //Create relationships between tables
  Board.hasMany(Column);
  Column.belongsTo(Board);

  Column.hasMany(Task);
  Task.belongsTo(Column);

  Board.hasOne(User);
  User.hasMany(Board);

  await sequelize.sync();
}

module.exports = setupDb;
