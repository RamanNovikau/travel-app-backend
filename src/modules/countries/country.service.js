const countryRepo = require('./country.repository');

const getAll = async () => {
  const countries = await countryRepo.getAllByLang();
  return countries;
};

const getOne = async (id) => {
  const country = await countryRepo.getOneByLang(id);
  return country;
};

module.exports = {
  getAll,
  getOne
};
