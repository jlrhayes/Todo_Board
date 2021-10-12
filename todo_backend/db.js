const { Sequelize } = require("sequelize");
const path = require("path");

const dbPath =
  process.env.NODE_ENV === "test"
    ? ":memory:"
    : path.join(__dirname, "todo_db.sqlite");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbPath,
  logging: false,
});

module.exports = sequelize;
