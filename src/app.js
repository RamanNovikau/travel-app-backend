const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const { dbConnection } = require('./db/mongodb');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

dbConnection();

app.listen(3000, function () {
    console.log('app listening on port 3000!')
})

const countryRouter = require('./modules/countries/country.router');
app.use('/countries', countryRouter);

const placeRouter = require('./modules/places/place.router');
app.use('/places', placeRouter);

