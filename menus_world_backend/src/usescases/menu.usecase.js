const Koder = require("../models/koder.model");

async function getKoders(filter) {
  const koders = await Koder.find(filter);

  return koders;
}

async function createKoder(koder) {
  const newKoder = new Koder(koder); // Instancia de modelo Koder

  await Koder.create(newKoder);

  return newKoder;
}

async function updateKoder(id, koder) {
  const filter = {
    _id: id,
  };

  await Koder.findOneAndUpdate(filter, koder);

  const updatedKoder = Koder.findOne(filter);

  return updatedKoder;
}

module.exports = {
  getKoders,
  createKoder,
  updateKoder,
};
