const ratingRepo = require('./rating.repository');
const userService = require('../users/user.service');

const getByPlace = async (id) => {
  const ratings = await ratingRepo.getByPlace(id);
  return ratings;
};

const addRating = async (ratingData) => {
  console.log(ratingData);
  const rating = await ratingRepo.addRating(ratingData);
  return rating;
};

module.exports = {
  getByPlace,
  addRating
};
