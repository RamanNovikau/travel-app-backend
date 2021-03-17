/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
const placeRepo = require('./place.repository');

const getAllByCountry = async (countryId) => {
  const places = await placeRepo.getAllByCountry(countryId);
  return places;
};

const getOne = async (id) => {
  const place = await placeRepo.getOneByLang(id);
  return place;
};

const getAll = async () => {
  const places = await placeRepo.getAll();
  return places;
};

const getWithAverageRating = async () => {
  const places = placeRepo.getWithRating().then((data) => {
    data.forEach((place) => {
      let average = 0;
      place.ratings.forEach((rating) => {
        average += rating.rating;
      });
      average /= place.ratings.length;
      average = average.toFixed(2);
      place.average = average;
    });
    return data.sort((placeA, placeB) => Number(placeB.average) - Number(placeA.average)).slice(0, 10);
  });
  return places;
};

module.exports = {
  getAllByCountry,
  getOne,
  getAll,
  getWithAverageRating
};
