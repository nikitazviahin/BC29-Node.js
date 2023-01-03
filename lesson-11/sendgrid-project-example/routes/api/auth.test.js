const mongoose = require("mongoose");
const request = require("supertest");
require("dotenv").config();

const app = require("../../app");
const { createHashPassword } = require("../../helpers");
const User = require("../../models/user");

mongoose.set("strictQuery", false);

const { MONGO_URI, PORT } = process.env;

describe("test auth routes", () => {
  let server;
  beforeAll(() => (server = app.listen(PORT)));
  afterAll(() => server.close());

  beforeEach((done) => {
    mongoose.connect(MONGO_URI).then(() => done());
  });

  test("test login route", async () => {
    const newUser = {
      email: "mykyta4@gmail.com",
      name: "mykyta",
      avatarURL: "mockurl",
      password: "qwerty",
    };

    const hashPassword = await createHashPassword(newUser.password);
    const user = await User.create({ ...newUser, password: hashPassword });

    const loginUser = {
      email: "mykyta4@gmail.com",
      password: "qwerty",
    };

    const response = await request(app)
      .post("/api/auth/signin")
      .send(loginUser);

    expect(response.statusCode).toBe(200);
    const { body } = response;
    expect(body.token).toBeTruthy();
    const { token } = await User.findById(user._id);
    expect(body.token).toBe(token);
    await User.findByIdAndDelete(user._id);
  });
});
