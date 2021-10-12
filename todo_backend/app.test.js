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
        console.log(response);

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
        console.log(response);

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
      .delete("/board/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("DELETE a board with an id of -5", () => {
  test("/boards/-5 returns 200", () => {
    return request(app)
      .delete("/board/-5")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("DELETE a board with an id of 5", () => {
  test("DELETE /boards/5 returns 404", () => {
    return request(app)
      .delete("/board/5")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("DELETE a board with a string id", () => {
  test("DELETE /boards/nonInt returns 400", () => {
    return request(app)
      .delete("/board/nonInt")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("DELETE a board with a float id", () => {
  test("DELETE /boards/1.5 returns 400", () => {
    return request(app)
      .delete("/board/1.5")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});


// -------------------------------------------------------------------------

// deleting a column

describe("DELETE a column with an id of 1", () => {
  test("DELETE /columns/1 returns 200", () => {
    return request(app)
      .delete("/columns/1")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});


describe("DELETE a column that is not in the database", () => {
  test("DELETE /columns/5 returns 404", () => {
    return request(app)
      .delete("/columns/5")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});


describe("DELETE a column with a negative id", () => {
  test("DELETE /columns/-5 returns 400", () => {
    return request(app)
      .delete("/columns/-5")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});


describe("DELETE a column with a string id", () => {
  test("DELETE /columns/nonInt returns 400", () => {
    return request(app)
      .delete("/columns/nonInt")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("DELETE a column with a float id", () => {
  test("DELETE /columns/1.5 returns 400", () => {
    return request(app)
      .delete("/columns/1.5")
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
  test("PUT /boards/1 returns 200", () => {
    return request(app)
      .put("/boards/1")
      .send({
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("UPDATE a board title that is not in the database", () => {
  test("PUT /boards/5 returns 404", () => {
    return request(app)
      .put("/boards/5")
      .send({
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("UPDATE a board title with a negative id", () => {
  test("PUT /boards/-5 returns 400", () => {
    return request(app)
      .put("/boards/-5")
      .send({
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("UPDATE a board title with a string id", () => {
  test("PUT /boards/nonInt returns 400", () => {
    return request(app)
      .put("/boards/nonInt")
      .send({
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("UPDATE a board title with a float id", () => {
  test("PUT /boards/1.5 returns 400", () => {
    return request(app)
      .put("/boards/1.5")
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
  test("PUT /columns/1 returns 200", () => {
    return request(app)
      .put("/columns/1")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});


describe("UPDATE a column title that is not in the database", () => {
  test("PUT /columns/5 returns 404", () => {
    return request(app)
      .put("/columns/5")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});


describe("UPDATE a column title with a negative id ", () => {
  test("PUT /columns/-5 returns 400", () => {
    return request(app)
      .put("/columns/-5")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});


describe("UPDATE a column title with a string id", () => {
  test("PUT /columns/nonInt returns 400", () => {
    return request(app)
      .put("/columns/nonInt")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("UPDATE a column title with a float id", () => {
  test("PUT /columns/1.5 returns 400", () => {
    return request(app)
      .put("/columns/1.5")
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
  test("PUT /tasks/1 returns 200", () => {
    return request(app)
      .put("/tasks/1")
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
  test("PUT /tasks/5 returns 404", () => {
    return request(app)
      .put("/tasks/5")
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
  test("PUT /tasks/-5 returns 400", () => {
    return request(app)
      .put("/tasks/-5")
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
  test("PUT /tasks/nonInt returns 400", () => {
    return request(app)
      .put("/tasks/nonInt")
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
  test("PUT /tasks/1.5 returns 400", () => {
    return request(app)
      .put("/tasks/1.5")
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
        name: "New Board",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

// ----------------------------------------------------------------

// creating a new column

describe("POST a column", () => {
  test("/boards/1/colummns returns 200", () => {
    return request(app)
      .post("/boards/1/colummns ")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("POST a column on a board that is not in the database", () => {
  test("/boards/5/colummns returns 404", () => {
    return request(app)
      .post("/boards/5/colummns ")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("POST a column on a board that has a negative id", () => {
  test("/boards/-5/colummns returns 400", () => {
    return request(app)
      .post("/boards/-5/colummns ")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("POST a column on a board that has a string id", () => {
  test("/boards/nonInt/colummns returns 400", () => {
    return request(app)
      .post("/boards/nonInt/colummns ")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("POST a column on a board that has a float id", () => {
  test("/boards/1.5/colummns returns 400", () => {
    return request(app)
      .post("/boards/1.5/colummns ")
      .send({
        name: "New Column",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});
// -----------------------------------------------------------------

// creating a new task

describe("POST a task", () => {
  test("POST /columns/1/tasks returns 200", () => {
    return request(app)
      .post("/colummns/1/tasks")
      .send({
        title: "New Task",
        description: "description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});


describe("POST a task on a column that is not in the database", () => {
  test("POST /columns/5/tasks returns 404", () => {
    return request(app)
      .post("/colummns/5/tasks")
      .send({
        title: "New Task",
        description: "description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("POST a task on a column with a negative id", () => {
  test("POST /columns/-5/tasks returns 400", () => {
    return request(app)
      .post("/colummns/-5/tasks")
      .send({
        title: "New Task",
        description: "description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("POST a task on a column with a string id", () => {
  test("POST /columns/nonInt/tasks returns 400", () => {
    return request(app)
      .post("/colummns/nonInt/tasks")
      .send({
        title: "New Task",
        description: "description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("POST a task on a column with a float id", () => {
  test("POST /columns/1.5/tasks returns 400", () => {
    return request(app)
      .post("/colummns/1.5/tasks")
      .send({
        title: "New Task",
        description: "description",
      })
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});


