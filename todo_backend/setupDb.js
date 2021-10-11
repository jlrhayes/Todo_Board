const User = require("./user");
const Board = require("./board");
const Column = require("./column");
const Task = require("./task");
const db = require("./db");

async function setupDb() {
  User.hasMany(Board);
  Board.belongsTo(User);

  User.hasMany(Task);
  Task.belongsTo(User);

  Board.hasMany(Column);
  Column.belongsTo(Board);

  Column.hasMany(Task);
  Task.belongsTo(Column);

  await db.sync({ force: process.env.NODE_ENV === "test" });
}

module.exports = setupDb;
