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

const getWithRating = async () => {
  const places = await Place.aggregate([
    {
      $lookup: {
        from: 'place-rating',
        let: { id: '$_id' },
        pipeline: [{ $match: { $expr: { $eq: ['$placeId', '$$id'] } } },
          {
            $project: {
              _id: 0, userId: 0, placeId: 0, date: 0, comment: 0
            }
          }],
        as: 'ratings'
      }
    }, { $match: { 'ratings.1': { $exists: true } } }]);
  return places;
};

module.exports = {
  getAllByCountry,
  getOneByLang,
  getAll,
  getWithRating
};
