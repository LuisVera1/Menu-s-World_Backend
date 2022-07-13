const jwt = require("jsonwebtoken");

const JWT_SECRET = "shhhhh";

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
