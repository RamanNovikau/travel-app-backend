const { Types } = require('mongoose');
const Place = require('./place.schema');

const getAllByCountry = async (countryId) => {
  const places = await Place.aggregate([{ $match: { countryId: Types.ObjectId(countryId) } }]);
  return places;
};

const getOneByLang = async (lang) => {
  const place = await Place.aggregate([{ $unwind: { path: '$localizations' } }, { $match: { 'localizations.lang': lang } }]);
  return place;
};

const getAll = async () => {
  const places = Place.find({});
  return places;
};

module.exports = {
  getAllByCountry,
  getOneByLang,
  getAll
};
