const app = require("./app");
const request = require("supertest");
const sandbox = require("./sandbox");

beforeEach(async () => {
  await sandbox();
});

// -----------------------------------------------------------------

// Getting all the boards
describe("GET all boards", () => {
  test("/boards works", () => {
    return request(app)
      .get("/boards")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

// getting all the users
describe("GET all users", () => {
  test("/users works", () => {
    return request(app)
      .get("/users")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

// ------------------------------------------------------------

// getting all the columns from a board

describe("GET all columns from a board", () => {
  test("/boards/1/columns works", () => {
    return request(app)
      .get("/boards/1/columns")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Get all the columns of a board with an id of 5", () => {
  test("/boards/5/columns returns 404", () => {
    return request(app)
      .get("/boards/5/columns")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("Get all the columns of a board with an id of -5", () => {
  test("/boards/-5/columns returns 400", () => {
    return request(app)
      .get("/boards/-5/columns")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("Get all the columns of a board with an id of nonInt", () => {
  test("/boards/nonInt/columns returns 400", () => {
    return request(app)
      .get("/boards/nonInt/columns")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("Get all the columns of a board with an id of 1.5", () => {
  test("/boards/1.5/columns returns 400", () => {
    return request(app)
      .get("/boards/1.5/columns")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

// -----------------------------------------------------------------
// get all the tasks from a column

describe("GET all tasks from a column", () => {
  test("/columns/1/tasks works", () => {
    return request(app)
      .get("/columns/1/tasks")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("GET all the tasks of a column with an id of 5", () => {
  test("/columns/5/tasks returns 404", () => {
    return request(app)
      .get("/columns/5/tasks")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("GET all the tasks of a column with an id of -5", () => {
  test("/columns/-5/tasks returns 400", () => {
    return request(app)
      .get("/columns/-5/tasks")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("GET all the tasks of a column with an id of nonInt", () => {
  test("/columns/nonInt/tasks returns 400", () => {
    return request(app)
      .get("/columns/nonInt/tasks")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("GET all the tasks of a column with an id of 1.5", () => {
  test("/columns/1.5/tasks returns 400", () => {
    return request(app)
      .get("/columns/1.5/tasks")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});
//-------------------------------------------------------------------

// deleting a board

describe("DELETE a board with an id of 1", () => {
  test("/boards/1 returns 200", () => {
    return request(app)
      .delete("/boards/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("DELETE a board with an id of -5", () => {
  test("/boards/-5 returns 200", () => {
    return request(app)
      .delete("/boards/-5")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("DELETE a board with an id of 5", () => {
  test("DELETE /boards/5 returns 404", () => {
    return request(app)
      .delete("/boards/5")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("DELETE a board with a string id", () => {
  test("DELETE /boards/nonInt returns 400", () => {
    return request(app)
      .delete("/boards/nonInt")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("DELETE a board with a float id", () => {
  test("DELETE /boards/1.5 returns 400", () => {
    return request(app)
      .delete("/boards/1.5")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

// -------------------------------------------------------------------------

// deleting a column

describe("DELETE a column with an id of 1", () => {
  test("DELETE /boards/1/columns/1 returns 200", () => {
    return request(app)
      .delete("/boards/1/columns/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("DELETE a column that is not in the database", () => {
  test("DELETE /boards/1/columns/5 returns 404", () => {
    return request(app)
      .delete("/boards/1/columns/5")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("DELETE a column with a negative id", () => {
  test("DELETE /boards/1/columns/-5 returns 400", () => {
    return request(app)
      .delete("/boards/1/columns/-5")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("DELETE a column with a string id", () => {
  test("DELETE /boards/1/columns/nonInt returns 400", () => {
    return request(app)
      .delete("/boards/1/columns/nonInt")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("DELETE a column with a float id", () => {
  test("DELETE /boards/1/columns/1.5 returns 400", () => {
    return request(app)
      .delete("/boards/1/columns/1.5")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});
// -----------------------------------------------------------------------

// deleting  Task

describe("DELETE a task with an id of 1", () => {
  test("DELETE /tasks/1 returns 200", () => {
    return request(app)
      .delete("/tasks/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("DELETE a task that is not in the database", () => {
  test("DELETE /tasks/5 returns 404", () => {
    return request(app)
      .delete("/tasks/5")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("DELETE a task with an negative id", () => {
  test("DELETE /tasks/-5 returns 400", () => {
    return request(app)
      .delete("/tasks/-5")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("DELETE a task with an string id", () => {
  test("DELETE /tasks/nonInt returns 400", () => {
    return request(app)
      .delete("/tasks/nonInt")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("DELETE a task with a float id", () => {
  test("DELETE /tasks/1.5 returns 400", () => {
    return request(app)
      .delete("/tasks/1.5")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});
// ----------------------------------------------------------------------

// update board name

describe("UPDATE a board title with an id of 1", () => {
  test("PATCH /boards/1 returns 200", () => {
    return request(app)
      .patch("/boards/1")
      .send({
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("UPDATE a board title that is not in the database", () => {
  test("PATCH /boards/5 returns 404", () => {
    return request(app)
      .patch("/boards/5")
      .send({
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("UPDATE a board title with a negative id", () => {
  test("PATCH /boards/-5 returns 400", () => {
    return request(app)
      .patch("/boards/-5")
      .send({
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("UPDATE a board title with a string id", () => {
  test("PATCH /boards/nonInt returns 400", () => {
    return request(app)
      .patch("/boards/nonInt")
      .send({
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("UPDATE a board title with a float id", () => {
  test("PATCH /boards/1.5 returns 400", () => {
    return request(app)
      .patch("/boards/1.5")
      .send({
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

// ---------------------------------------------------------------------

// update a column title

describe("UPDATE a column title with an id of 1", () => {
  test("PATCH /columns/1 returns 200", () => {
    return request(app)
      .patch("/columns/1")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("UPDATE a column title that is not in the database", () => {
  test("PATCH /columns/5 returns 404", () => {
    return request(app)
      .patch("/columns/5")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("UPDATE a column title with a negative id ", () => {
  test("PATCH /columns/-5 returns 400", () => {
    return request(app)
      .patch("/columns/-5")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("UPDATE a column title with a string id", () => {
  test("PATCH /columns/nonInt returns 400", () => {
    return request(app)
      .patch("/columns/nonInt")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("UPDATE a column title with a float id", () => {
  test("PATCH /columns/1.5 returns 400", () => {
    return request(app)
      .patch("/columns/1.5")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

// ---------------------------------------------------------------

// update a task

describe("UPDATE a task ", () => {
  test("PATCH /tasks/1 returns 200", () => {
    return request(app)
      .patch("/tasks/1")
      .send({
        title: "New Task",
        description: "New Description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("UPDATE a task that is not in the database ", () => {
  test("PATCH /tasks/5 returns 404", () => {
    return request(app)
      .patch("/tasks/5")
      .send({
        title: "New Task",
        description: "New Description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("UPDATE a task that has a negative id", () => {
  test("PATCH /tasks/-5 returns 400", () => {
    return request(app)
      .patch("/tasks/-5")
      .send({
        title: "New Task",
        description: "New Description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("UPDATE a task that has a string id", () => {
  test("PATCH /tasks/nonInt returns 400", () => {
    return request(app)
      .patch("/tasks/nonInt")
      .send({
        title: "New Task",
        description: "New Description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("UPDATE a task that has a float id", () => {
  test("PATCH /tasks/1.5 returns 400", () => {
    return request(app)
      .patch("/tasks/1.5")
      .send({
        title: "New Task",
        description: "New Description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

// ----------------------------------------------------------------

// creating a new board

describe("POST a board", () => {
  test("POST /boards returns 200", () => {
    return request(app)
      .post("/boards")
      .send({
        title: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

// ----------------------------------------------------------------

// creating a new column

describe("POST a column", () => {
  test("/boards/1/columns returns 200", () => {
    return request(app)
      .post("/boards/1/columns")
      .send({
        title: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("POST a column on a board that is not in the database", () => {
  test("/boards/5/columns returns 404", () => {
    return request(app)
      .post("/boards/5/columns")
      .send({
        title: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("POST a column on a board that has a negative id", () => {
  test("/boards/-5/columns returns 400", () => {
    return request(app)
      .post("/boards/-5/columns")
      .send({
        title: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("POST a column on a board that has a string id", () => {
  test("/boards/nonInt/ returns 400", () => {
    return request(app)
      .post("/boards/nonInt/columns")
      .send({
        title: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("POST a column on a board that has a float id", () => {
  test("/boards/1.5/columns returns 400", () => {
    return request(app)
      .post("/boards/1.5/columns")
      .send({
        title: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});
// -----------------------------------------------------------------

// creating a new task

describe("POST a task", () => {
  test("POST /tasks with columnId as '1' returns 200", () => {
    return request(app)
      .post("/tasks")
      .send({
        title: "New Task",
        description: "description",
        columnId: 1,
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("POST a task on a column that is not in the database", () => {
  test("POST /tasks with columnId as '5' returns 404", () => {
    return request(app)
      .post("/columns/5/tasks")
      .send({
        title: "New Task",
        description: "description",
        columnId: 5,
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("POST a task on a column with a negative id", () => {
  test("POST /tasks with columnId as '-5' returns 400", () => {
    return request(app)
      .post("/tasks")
      .send({
        title: "New Task",
        description: "description",
        columnId: -5,
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("POST a task on a column with a string id", () => {
  test("POST /tasks with columnId as 'nonInt' returns 400", () => {
    return request(app)
      .post("/tasks")
      .send({
        title: "New Task",
        description: "description",
        columnId: "nonInt",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("POST a task on a column with a float id", () => {
  test("POST /tasks with columnId as '1.5' returns 400", () => {
    return request(app)
      .post("/tasks")
      .send({
        title: "New Task",
        description: "description",
        columnId: 1.5,
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});
