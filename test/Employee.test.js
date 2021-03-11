// Starter file provided by Instructor (03/09/2021) AC

const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const obj = new Employee();

  expect(obj).toBeTruthy();
});

test("Can set name via constructor arguments", () => {
  const name = "Andrew";
  const obj = new Employee(name);

  expect(obj.name).toEqual(name);
});

test("Can set id via constructor argument", () => {
  const id = 0;
  const obj = new Employee("", id);

  expect(obj.id).toEqual(id);
});

test("Can set email via constructor argument", () => {
  const email = "123@test.com";
  const obj = new Employee("", 0, email);

  expect(obj.email).toEqual(email);
});

test("Can get name via getName()", () => {
  const name = "Andrew";
  const obj = new Employee(name)

  expect(obj.getName()).toEqual(name);
});

test("Can get id via getId()", () => {
  const id = 0;
  const obj = new Employee("", id);

  expect(obj.getId()).toEqual(id);
});

test("Can get email via getEmail()", () => {
  const email = "123@test.com";
  const obj = new Employee("", 0, email);

  expect(obj.getEmail()).toEqual(email);
});

test("getRole() should return \"Employee\"", () => {
  const obj = new Employee();

  expect(obj.getRole()).toEqual("Employee");
});
