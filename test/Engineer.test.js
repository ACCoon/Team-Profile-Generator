// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const github = "test";
  const obj = new Engineer("", 0, "", github);

  expect(obj.github).toEqual(github);
});

test("getRole() should return \"Engineer\"", () => {
  const obj = new Engineer();

  expect(obj.getRole()).toEqual("Engineer");
});

test("Can get GitHub username via getGithub()", () => {
  const github = "test";
  const obj = new Engineer("", 0, "", github);

  expect(obj.getGithub()).toEqual(github);
});
