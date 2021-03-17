const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const dotenv = require('dotenv');
const ratingService = require('./rating.service');
const userService = require('../users/user.service');

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
      placeId, userId, date, comment, rating, email, token
    } = req.body;

    const user = await userService.getOneByEmail({ email });

    if (!user) {
      return res.status(401).json({ message: 'unauthorized' });
    }

    const verify = jwt.verify(token, process.env.JWT_SECRET, async (err, verifiedJwt) => {
      if (err) {
        return res.status(401).json({ message: 'unauthorized' });
      }

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
    });
  }
  catch (e) {
    res.status(500).json({ message: 'publishError' });
  }
});

module.exports = router;
