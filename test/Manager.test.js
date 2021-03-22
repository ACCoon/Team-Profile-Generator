// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { expect } = require("@jest/globals");

test("Can set office number via constructor argument", () => {
  const officeNumber = 123;
  const obj = new Manager("", 0, "", officeNumber);

  expect(obj.officeNumber).toEqual(officeNumber);
});

test('getRole() should return "Manager"', () => {
  const obj = new Manager();

  expect(obj.getRole()).toEqual("Manager");
});

test("Can get office number via getOfficeNumber()", () => {
  const officeNumber = 123;
  const obj = new Manager("", 0, "", officeNumber);

  expect(obj.getOfficeNumber()).toEqual(officeNumber);
});
