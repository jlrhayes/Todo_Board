const setupDb = require("./setupDb");

async function sandbox() {
  setupDb();
}

module.exports = sandbox;
