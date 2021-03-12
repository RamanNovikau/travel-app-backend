const countryRepo = require('./country.repository');

const getAll = async () => {
    const countries = await countryRepo.getAllByLang();
    return countries;
};

const getOne = async (id, lang) => {
    const country = await countryRepo.getOneByLang(id, lang);
    return country;
};

module.exports = {
    getAll,
    getOne,
};