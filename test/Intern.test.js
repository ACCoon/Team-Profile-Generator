// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const school = "UNCC";
  const obj = new Intern("", 0, "", school);

  expect(obj.school).toEqual(school);
});

test("getRole() should return \"Intern\"", () => {
  const obj = new Intern();

  expect(obj.getRole()).toEqual("Intern");
});

test("Can get school via getSchool()", () => {
  const school = "UNCC";
  const obj = new Intern("", 0, "", school);

  expect(obj.getSchool()).toEqual(school);
});
