const User = require("./user");
const Board = require("./board");
const Column = require("./column");
const Task = require("./task");
const db = require("./db");

async function setupDb() {
  User.hasMany(Board, { onDelete: "cascade" });
  Board.belongsTo(User);

  User.hasMany(Task, { onDelete: "cascade" });
  Task.belongsTo(User);

  Board.hasMany(Column, { onDelete: "cascade" });
  Column.belongsTo(Board);

  Column.hasMany(Task, { onDelete: "cascade" });
  Task.belongsTo(Column);

  await db.sync({ force: process.env.NODE_ENV === "test" });
}

module.exports = setupDb;
