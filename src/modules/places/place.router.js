const express = require('express');

const router = express.Router();
const placeService = require('./place.service');

router.get('/', async (req, res, next) => {
  if (!req.query.country) {
    const err = new Error('Required query params missing');
    err.status = 400;
    next(err);
  }
  const countryId = req.query.country;
  const data = await placeService.getAllByCountry(countryId);
  res.send(data);
});

router.get('/all', async (req, res) => {
  const data = await placeService.getAll();
  res.send(data);
});

module.exports = router;
