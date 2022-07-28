const Admin = require("../models/adminrestaurant.model");
const { encrypt, compare } = require("../lib/encryptor");
const { sign } = require("../lib/jwt");

function getAll() {
  return User.find();
}

async function createAdminUser({ adminName, email, password }) {
  const encryptedPassword = await encrypt(password);

  return Admin.create({
    adminName,
    email,
    password: encryptedPassword,
  });
}

async function login({ email, password }) {
  const adminFound = await User.findOne({ email });

  if (!adminFound) throw new Error("Admin not found");

  const encryptedPassword = adminFound.password;
  const isCorrectPassword = await compare(password, encryptedPassword);

  if (!isCorrectPassword) throw new Error("Wrong password");

  const token = sign({ id: userFound._id });

  return token;
}

module.exports = {
  getAll,
  createAdminUser,
  login,
};
