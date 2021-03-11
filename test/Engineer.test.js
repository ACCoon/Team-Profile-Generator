// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const name = "Andrew";
  const id = 0;
  const email = "123@test.com";
  const github = "test";
  const obj = new Engineer(name, id, email, github);

  expect(obj.github).toEqual(github);
});

test("getRole() should return \"Engineer\"", () => {
  const obj = new Engineer();

  expect(obj.getRole()).toEqual("Engineer");
});

test("Can get GitHub username via getGithub()", () => {
  const name = "Andrew";
  const id = 0;
  const email = "123@test.com";
  const github = "test";
  const obj = new Engineer(name, id, email, github);

  expect(obj.getGithub()).toEqual(github);
});
