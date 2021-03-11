const Place = require('./place.schema');
const { Types } = require('mongoose');

const getAllByLang = async (countryId, lang) => {
    return Place.aggregate([{ $match: { countryId: Types.ObjectId(countryId) } }, { $unwind: { path: '$localizations' } }, { $match: { "localizations.lang": lang } }]);
};

const getOneByLang = async (lang) => {
    return Place.aggregate([{ $unwind: { path: '$localizations' } }, { $match: { "localizations.lang": lang } }]);
};

module.exports = {
    getAllByLang,
    getOneByLang,
};