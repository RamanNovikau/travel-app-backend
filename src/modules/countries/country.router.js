const express = require('express');
const router = express.Router();
const countryService = require('./country.service');

router.get('/', async (request, response) => {
    const lang = request.query.lang || 'en';
    const data = await countryService.getAll(lang);
    response.send(data);
});

router.get('/:id', async (request, response) => {
    const lang = request.query.lang || 'en';
    const { id } = request.params;
    const data = await countryService.getOne(id, lang);
    response.send(data);
});

module.exports = router;