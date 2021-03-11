const Country = require('./country.schema');

const getAllByLang = async (lang) => {
    return Country.aggregate([{ $unwind: { path: '$localizations' } }, { $match: { "localizations.lang": lang } }]);
};

const getOneByLang = async (lang) => {
    return Country.aggregate([{ $unwind: { path: '$localizations' } }, { $match: { "localizations.lang": lang } }]);
};

module.exports = {
    getAllByLang,
    getOneByLang,
};