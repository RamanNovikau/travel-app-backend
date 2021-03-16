const placeRepo = require('./place.repository');

const getAllByCountry = async (countryId) => {
  const places = await placeRepo.getAllByCountry(countryId);
  return places;
};

const getOne = async (id) => {
  const place = await placeRepo.getOneByLang(id);
  return place;
};

const getAll = async () => {
  const places = await placeRepo.getAll();
  return places;
};

module.exports = {
  getAllByCountry,
  getOne,
  getAll
};
