const express = require('express');
const router = express.Router();
const countryService = require('./country.service');

router.get('/', async (req, res) => {
    const data = await countryService.getAll();
    res.send(data);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await countryService.getOne(id);
    res.send(data);
});

module.exports = router;