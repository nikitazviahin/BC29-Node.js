/* 
    1. isLeapYear отримує ціле число
    2. Повертає true якщо рік високосний, false якщо ні
    3. Повертає помилку з правильним текстом в випадку невалідних даних

    2008 - true
    2003 - false
    1900 - false
    2000 - true

    41 - error 'Year must higher or equal to 42'
    2000.4 - error 'Year must be an integer'
    '2008' - error 'Year must be a number'
    'dsadas' - error 'Year must be a number'
    null -  error 'Year must be a number'
    true - error 'Year must be a number'
    false - error 'Year must be a number'
    () - error 'Year must exist'
    () => {} -  error 'Year must be a number'
    [] - error 'Year must be a number'
    {} - error 'Year must be a number'
*/
const isLeapYear = require("./isLeapYear");

describe("isLeapYear function test", () => {
  test("2008 - true", () => {
    expect(isLeapYear(2008)).toBe(true);
  });

  test("2003 - true", () => {
    expect(isLeapYear(2003)).toBe(false);
  });

  test("1900 - true", () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test("2000 - true", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test("41 - error 'Year must higher or equal to 42'", () => {
    expect(() => isLeapYear(41)).toThrow("Year must higher or equal to 42");
  });

  test("2000.4 - error 'Year must be an integer'", () => {
    expect(() => isLeapYear(2000.4)).toThrow("Year must be an integer");
  });

  test("'2008' - error 'Year must be a number'", () => {
    expect(() => isLeapYear("2008").toThrow("Year must be a number"));
  });

  test("() - error 'Year must exist'", () => {
    expect(() => isLeapYear()).toThrow("Year must exist");
  });
});
