const placeRepo = require('./place.repository');

const getAll = async (countryId, lang) => {
    const places = await placeRepo.getAllByLang(countryId, lang);
    return places;
};

const getOne = async (id, lang) => {
    const place = await placeRepo.getOneByLang(id, lang);
    return place;
};

module.exports = {
    getAll,
    getOne,
};