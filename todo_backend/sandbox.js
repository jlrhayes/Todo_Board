const setupDb = require("./setupDb");
const User = require("./user");
const Board = require("./board");
const Column = require("./column");
const Task = require("./task");

async function sandbox() {
  await setupDb();
  //Create user
  const newUser = await User.create({
    name: "Test",
    passwordHash: "Test Hash",
    email: "test@test.com",
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png",
    isAdmin: true,
  });

  //Create board
  const newBoard = await newUser.createBoard({
    name: "New Board",
  });

  // Create two columns
  const columnOne = await newBoard.createColumn({
    name: "Column One",
  });

  const columnTwo = await newBoard.createColumn({
    name: "Column Two",
  });

  //Create a task for each column
  const taskOne = await columnOne.createTask({
    title: "Task One",
    description: "Task in column one",
  });
  taskOne.setUser(newUser);

  const taskTwo = await columnTwo.createTask({
    title: "Task Two",
    description: "Task in column two",
  });
  taskTwo.setUser(newUser);
}

module.exports = sandbox;
