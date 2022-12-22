const jwt = require("jsonwebtoken");

const payload = {
  id: "639b658e7eb126bb98334e0b",
};

const SECRET_KEY = "DSAGHJDHSAGDHSAJDSA312321";

const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

// console.log(token);
// const decodedToken = jwt.decode(token);

// console.log(decodedToken);

try {
  const verifiedToken = jwt.verify(token, SECRET_KEY);
  console.log(verifiedToken);
} catch (error) {
  console.log(error.message);
}
