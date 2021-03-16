const { Types } = require('mongoose');
const Country = require('./country.schema');

const getAllByLang = async () => {
  const countries = await Country.find({});
  return countries;
};

const getOneByLang = async (id) => {
  const country = await Country.aggregate([{ $match: { _id: Types.ObjectId(id) } }]);
  return country;
};

module.exports = {
  getAllByLang,
  getOneByLang
};
