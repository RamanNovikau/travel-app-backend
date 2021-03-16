const express = require('express');

const router = express.Router();
const ratingService = require('./rating.service');

router.get('/', async (req, res, next) => {
  if (!req.query.place) {
    const err = new Error('Required query params missing');
    err.status = 400;
    next(err);
  }
  const placeId = req.query.place;
  const data = await ratingService.getByPlace(placeId);
  res.send(data);
});

router.post('/publish', async (req, res) => {
  try {
    console.log(req.body);
    const {
      placeId, userId, date, comment, rating
    } = req.body;
    const publishRating = await ratingService.addRating({
      placeId,
      userId,
      date,
      comment,
      rating
    });
    res.status(201).json({
      publishRating
    });
  }
  catch (e) {
    res.status(500).json({ message: 'publishError' });
  }
});

module.exports = router;
