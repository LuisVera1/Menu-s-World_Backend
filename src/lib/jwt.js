const jwt = require("jsonwebtoken");
require("dotenv").config(); // las variables del .env se agregan a process.env

const JWT_SECRET = process.env.JWT_SECRET;

function sign(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

function verify(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  sign,
  verify,
};
