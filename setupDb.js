const User = require("./users");
const Board = require("./boards");
const Column = require("./columns");
const Task = require("./tasks");
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
    await db.sync();

}

module.exports = setupDb;