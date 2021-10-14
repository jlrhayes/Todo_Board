const sequelize = require("./db");
const { validate, ValidationError, Joi } = require("express-validation");
const express = require("express");
const User = require("./user");
const Board = require("./board");
const Column = require("./column");
const Task = require("./task");
const sandbox = require("./sandbox");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const isImageUrl = require("is-image-url");

const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

sandbox();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function checkIdValid(id, res) {
  if (isNaN(id) || !Number.isInteger(Number(id))) {
    res.status(400).send({
      message: "id must be an integer",
    });
  } else if (id < 1) {
    res.status(400).send({
      message: "id must be greated than 0",
    });
  } else {
    return true;
  }
}

function checkBoardExists(board, id, res) {
  if (board === null) {
    res.status(404).send({
      message: `Board with id '${id}' not found`,
    });
  } else {
    return true;
  }
}

function checkColumnExists(column, id, res) {
  if (column === null) {
    res.status(404).send({
      message: `Column with id '${id}' not found`,
    });
  } else {
    return true;
  }
}

function checkTaskExists(task, id, res) {
  if (task === null) {
    res.status(404).send({
      message: `Task with id '${id}' not found`,
    });
  } else {
    return true;
  }
}

//Get all boards
app.get("/boards", async (req, res) => {
  const boards = await Board.findAll();
  if (boards.length === 0 || boards === null) {
    res.status(404).send({
      message: `No boards found`,
    });
  } else {
    res.json(boards);
  }
});

//Get all users
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  if (users === null || users.length === 0) {
    res.status(404).send({
      message: `No users found`,
    });
  }
  res.json(users);
});

//Get user by id
app.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).send({
      message: `No users found`,
    });
  }
  return res.json(user);
});

//Get all columns of a board
app.get("/boards/:id/columns", async (req, res) => {
  if (checkIdValid(req.params.id, res)) {
    const board = await Board.findByPk(req.params.id);
    if (checkBoardExists(board, req.params.id, res)) {
      const columns = await board.getColumns();
      if (columns === null) {
        res.status(404).send({
          message: `No columns available for board with id '${req.params.id}'`,
        });
      } else {
        res.json(columns);
      }
    }
  }
});

//Get all tasks of a column
app.get("/columns/:id/tasks", async (req, res) => {
  if (checkIdValid(req.params.id, res)) {
    const column = await Column.findByPk(req.params.id);
    if (checkColumnExists(column, req.params.id, res)) {
      const tasks = await column.getTasks();
      if (tasks === null) {
        res.status(404).send({
          message: `No tasks available for column with id '${req.params.id}'`,
        });
      } else {
        res.json(tasks);
      }
    }
  }
});

//Delete a board
app.delete("/boards/:id", async (req, res) => {
  if (checkIdValid(req.params.id, res)) {
    const board = await Board.findByPk(req.params.id);
    if (checkBoardExists(board, req.params.id, res)) {
      Board.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ message: "Board deleted successfully" });
    }
  }
});

//Delete a column
app.delete("/boards/:boardId/columns/:id", async (req, res) => {
  if (checkIdValid(req.params.id, res)) {
    const column = await Column.findByPk(req.params.id);
    if (checkColumnExists(column, req.params.id, res)) {
      Column.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ message: "Column deleted successfully" });
    }
  }
});

//Delete a task
app.delete("/tasks/:id", async (req, res) => {
  if (checkIdValid(req.params.id, res)) {
    const task = await Task.findByPk(req.params.id);
    if (checkTaskExists(task, req.params.id, res)) {
      Task.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send({ message: "Task deleted successfully" });
    }
  }
});

//Update column name
app.patch("/columns/:id", async (req, res) => {
  if (checkIdValid(req.params.id, res)) {
    if (!req.body.title) {
      return res.status(400).send({
        message: `Please pass a valid name`,
      });
    } else {
      const column = await Column.findByPk(req.params.id);
      if (checkColumnExists(column, req.params.id, res)) {
        await column.update({ title: req.body.title});
        return res.send({ message: "Column updated successfully", column });
      }
    }
  }
});

//Update task
app.patch("/tasks/:id", async (req, res) => {
  if (checkIdValid(req.params.id, res)) {
    const task = await Task.findByPk(req.params.id);
    if (checkTaskExists(task, req.params.id, res)) {
      task.update({
        title: req.body.title,
        description: req.body.description,
      });
      res.send({ message: "Task updated successfully" });
    }
  }
});

//Update board
app.patch("/boards/:id", async (req, res) => {
  if (checkIdValid(req.params.id, res)) {
    if (!req.body.name) {
      res.status(400).send({
        message: `Please pass a valid name`,
      });
    } else {
      const board = await Board.findByPk(req.params.id);
      if (checkBoardExists(board, req.params.id, res)) {
        board.update({ name: req.body.name });
        res.send({ message: "Board updated successfully" });
      }
    }
  }
});

// Create a new board
app.post("/boards", async (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: `Please pass a valid title`,
    });
  } else {
    await Board.create({
      title: req.body.title,
    });
    res.send({ message: "Board created successfully" });
  }
});

const userValidation = {
  body: Joi.object({
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    avatarUrl: Joi.string().required(),
    isAdmin: Joi.boolean().required(),
  }),
};

// Create a new user
app.post("/users", validate(userValidation, {}, {}), async (req, res) => {
  const { name, email, password, avatarUrl, isAdmin } = req.body;
  if (isImageUrl(avatarUrl)) {
    //Check if name exists (case insenitive)
    const user = await User.findOne({
      where: {
        name: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("name")),
          "LIKE",
          "%" + name.toLowerCase() + "%"
        ),
      },
    });
    if (user) {
      res
        .status(400)
        .send({ message: `User with name '${name}' already exists.` });
    } else {
      if (password.length < 6) {
        res.status(400).send({
          message: `Please enter a password with a length of 6 characters or more.`,
        });
      } else {
        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(password, salt, async function (err, hash) {
            await User.create({
              name: name,
              passwordHash: hash,
              email: email,
              avatarUrl: avatarUrl,
              isAdmin: isAdmin,
            });
            res.send({
              token: "testToken",
            });
          });
        });
      }
    }
  } else {
    res.status(400).send({ message: `Please pass a valid logo url.` });
  }
});

//login
app.post("/users/login", async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({
    where: {
      name: sequelize.where(
        sequelize.fn("LOWER", sequelize.col("name")),
        "LIKE",
        "%" + name.toLowerCase() + "%"
      ),
    },
  });
  if (password.length < 6) {
    res.status(400).send({
      message: `Please enter a password with a length of 6 characters or more.`,
    });
  } else {
    if (user) {
      bcrypt.compare(password, user.passwordHash, function (err, result) {
        // Compare
        // if passwords match
        if (result) {
          res.send({
            token: "testToken",
          });
        }
        // if passwords do not match
        else {
          res.status(400).send({ message: "Password incorrect" });
        }
      });
    } else {
      res
        .status(400)
        .send({ message: `No user with the name '${name}' found.` });
    }
  }
});

// Create a new column
app.post("/boards/:boardId/columns/", async (req, res) => {
  if (checkIdValid(req.params.boardId, res)) {
    if (!req.body.title) {
      res.status(400).send({
        message: `Please pass a valid title`,
      });
    } else {
      const board = await Board.findByPk(req.params.boardId);
      if (checkBoardExists(board, req.params.boardId, res)) {
        await Column.create({
          title: req.body.title,
          boardId: req.params.boardId,
        });
        res.send({ message: "Column created successfully" });
      }
    }
  }
});

// Create a new task
app.post("/tasks", async (req, res) => {
  if (checkIdValid(req.body.columnId, res)) {
    if (!req.body.title) {
      res.status(400).send({
        message: `Please pass a valid title`,
      });
    } else {
      const column = await Column.findByPk(req.body.columnId);
      if (checkColumnExists(column, req.body.columnId, res)) {
        await Task.create({
          title: req.body.title,
          description: req.body.description,
          columnId: req.body.columnId,
        });
        res.send({ message: "Task created successfully" });
      }
    }
  }
});

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err);
  }
  return res.status(500).json(err);
});

module.exports = app;
