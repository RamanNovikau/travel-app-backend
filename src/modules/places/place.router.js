const express = require('express');
const router = express.Router();
const placeService = require('./place.service');

router.get('/', async (request, response, next) => {
    const lang = request.query.lang || 'en';
    if (!request.query.country) {
        const err = new Error('Required query params missing');
        err.status = 400;
        next(err);
    }
    const countryId = request.query.country;
    const data = await placeService.getAll(countryId, lang);
    response.send(data);
});

module.exports = router;