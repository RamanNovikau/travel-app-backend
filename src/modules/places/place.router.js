const express = require('express');
const router = express.Router();
const placeService = require('./place.service');

router.get('/', async (req, res, next) => {
    const lang = req.query.lang || 'en';
    if (!req.query.country) {
        const err = new Error('Required query params missing');
        err.status = 400;
        next(err);
    }
    const countryId = req.query.country;
    const data = await placeService.getAll(countryId, lang);
    res.send(data);
});

module.exports = router;