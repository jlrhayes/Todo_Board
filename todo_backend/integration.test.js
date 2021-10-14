const app = require("./app");
const request = require("supertest");
const sandbox = require("./sandbox");
const User = require("./user");
const Task = require("./task");

beforeEach(async () => {
  await sandbox();
});

test("POST new user", async () => {
  const sentData = {
    name: "testuser",
    password: "password",
    email: "test@email.com",
    avatarUrl: "https://i.picsum.photos/id/161/200/300.jpg?hmac=-nq4AHxOS9Wa6ljn39CmzpqO9vtccMNfDPUOsijD5Wk",
    isAdmin: false,
  };
  const response = await request(app).post("/users").send(sentData);
  const userId = response.body.user.id;
  const user = await User.findOne({ where: { id: userId } });
  expect(user).toBeInstanceOf(User);
  expect(user.name).toBe(sentData.name);
});

test("POST new task with user", async () => {
  const sentData = {
    title: "task_title",
    description: "description",
    columnId: 2,
    userId: 1,
  };
  const response = await request(app).post("/tasks").send(sentData);
  const taskId = response.body.task.id;
  const task = await Task.findOne({ where: { id: taskId } });
  expect(task.userId).toBeTruthy();
});

test("POST new task without user", async () => {
  const sentData = {
    title: "task_title",
    description: "description",
    columnId: 2,
  };
  const response = await request(app).post("/tasks").send(sentData);
  const taskId = response.body.task.id;
  const task = await Task.findOne({ where: { id: taskId } });
  expect(task).toBeInstanceOf(Task);
});
