const app = require("./app");
const request = require("supertest");
const sandbox = require("./sandbox");

beforeEach(async () => {
  await sandbox();
});

describe("GET all boards", () => {
  test("/boards works", () => {
    return request(app)
      .get("/boards")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("GET all users", () => {
  test("/users works", () => {
    return request(app)
      .get("/users")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("GET all columns from a board", () => {
  test("/boards/1/columns works", () => {
    return request(app)
      .get("/boards/1/columns")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("/boards/5/columns returns 404", () => {
    return request(app)
      .get("/boards/5/columns")
      .then((response) => {
        console.log(response);

        expect(response.statusCode).toBe(404);
      });
  });

  test("/boards/-5/columns returns 400", () => {
    return request(app)
      .get("/boards/-5/columns")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });

  test("/boards/asd/columns returns 400", () => {
    return request(app)
      .get("/boards/asd/columns")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});

describe("GET all tasks from a column", () => {
  test("/columns/1/tasks works", () => {
    return request(app)
      .get("/columns/1/tasks")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("/columns/5/tasks returns 404", () => {
    return request(app)
      .get("/columns/5/tasks")
      .then((response) => {
        console.log(response);

        expect(response.statusCode).toBe(404);
      });
  });

  test("/columns/-5/tasks returns 400", () => {
    return request(app)
      .get("/columns/-5/tasks")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });

  test("/columns/asd/tasks returns 400", () => {
    return request(app)
      .get("/columns/asd/tasks")
      .then((response) => {
        expect(response.statusCode).toBe(400);
      });
  });
});
