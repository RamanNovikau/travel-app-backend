const Country = require('./country.schema');
const { Types } = require('mongoose');

const getAllByLang = async () => {
    return Country.find({});
    // aggregate([{ $unwind: { path: '$localizations' } }, { $match: { "localizations.lang": lang } }]);
};

const getOneByLang = async (id, lang) => {
    return Country.aggregate([{ $match: { _id: Types.ObjectId(id) } }]);
};

module.exports = {
    getAllByLang,
    getOneByLang,
};