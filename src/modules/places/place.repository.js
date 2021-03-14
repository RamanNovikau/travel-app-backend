const Place = require('./place.schema');
const { Types } = require('mongoose');

const getAllByCountry = async (countryId, lang) => {
    return Place.aggregate([{ $match: { countryId: Types.ObjectId(countryId) } }]);
};

const getOneByLang = async (lang) => {
    return Place.aggregate([{ $unwind: { path: '$localizations' } }, { $match: { "localizations.lang": lang } }]);
};

const getAll = async () => {
    return Place.find({});
};

module.exports = {
    getAllByCountry,
    getOneByLang, 
    getAll,
};