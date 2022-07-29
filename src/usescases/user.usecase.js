const User = require("../models/user.model");
const { encrypt, compare } = require("../lib/encryptor");
const { sign } = require("../lib/jwt");

function getAll() {
  return User.find();
}

async function createUser({ username, email, password }) {
  const encryptedPassword = await encrypt(password);

  return User.create({
    username,
    email,
    password: encryptedPassword,
  });
}

async function login({ email, password }) {
  const userFound = await User.findOne({ email });

  if (!userFound) throw new Error("User not found");

  const encryptedPassword = userFound.password;
  const isCorrectPassword = await compare(password, encryptedPassword);

  if (!isCorrectPassword) throw new Error("Wrong password");

  const token = sign({ id: userFound._id });

  return token;
}

module.exports = {
  getAll,
  createUser,
  login,
};
