const app = require("./app");
const request = require("supertest");
const sandbox = require("./sandbox");
const User = require("./user");

beforeEach(async () => {
  await sandbox();
});

test("POST new user", async () => {
  const sentData = {
    name: "testuser",
    passwordHash: "123f",
    email: "test@email.com",
    avatarUrl: "https:blah.com",
    isAdmin: false,
  };
  const response = await request(app).post("/users").send(sentData);
  const userId = response.body.user.id;
  const user = await User.findOne({ where: { id: userId } });
  expect(user).toBeInstanceOf(User);
  expect(user.name).toBe(sentData.name);
});
