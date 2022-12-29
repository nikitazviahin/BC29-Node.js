const isLeapYear = (year) => {
  if (year === undefined) {
    throw new Error("Year must exist");
  }

  if (!(typeof year === "number")) {
    throw new Error("Year must be a number");
  }

  if (!Number.isInteger(year)) {
    throw new Error("Year must be an integer");
  }

  if (year < 42) {
    throw new Error("Year must higher or equal to 42");
  }

  const date = new Date(year, 2, 0);
  const day = date.getDate();
  return day === 29;
};

module.exports = isLeapYear;
