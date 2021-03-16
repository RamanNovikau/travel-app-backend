const { Types } = require('mongoose');
const Rating = require('./rating.schema');

const getByPlace = async (id) => {
  console.log(id);
  const ratings = await Rating.aggregate([{ $match: { placeId: Types.ObjectId(id) } },
    {
      $lookup: {
        from: 'users',
        let: { id: '$userId' },
        pipeline: [{ $match: { $expr: { $eq: ['$_id', '$$id'] } } },
          { $project: { _id: 0, userImage: 0, password: 0 } }],
        as: 'user'
      }
    }]);
  return ratings;
};

const addRating = async (ratinData) => {
  const rating = await Rating(ratinData);
  console.log(rating);
  await rating.save();
  return rating;
};

module.exports = {
  getByPlace,
  addRating
};
