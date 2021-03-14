const Country = require('./country.schema');
const { Types } = require('mongoose');

const getAllByLang = async () => {
    return Country.find({});
};

const getOneByLang = async (id) => {
    return Country.aggregate([{ $match: { _id: Types.ObjectId(id) } }]);
};

module.exports = {
    getAllByLang,
    getOneByLang,
};