const User = require("../models/user.model");
const { encrypt, compare } = require("../lib/encryptor");
const { sign } = require("../lib/jwt");

function getAll() {
  return User.find();
}

async function createUser({
  username,
  email,
  password,
  restaurants,
  userType,
}) {
  const encryptedPassword = await encrypt(password);

  return User.create({
    username,
    email,
    password: encryptedPassword,
    restaurants,
    userType,
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

async function getUser({ email, password }) {
  const userFound = await User.findOne({ email });

  if (!userFound) throw new Error("User not found");

  const encryptedPassword = userFound.password;
  const isCorrectPassword = await compare(password, encryptedPassword);

  if (!isCorrectPassword) throw new Error("Wrong password");

  const token = {
    id: userFound._id,
    userName: userFound.username,
    userCategory: userFound.userType,
    userRestaurant: userFound.restaurants,
  };
  return token;
}

module.exports = {
  getAll,
  createUser,
  login,
  getUser,
};
