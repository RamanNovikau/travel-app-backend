const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./db/mongodb');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}));

dbConnection();

app.listen(port, function () {
    console.log('app listening on port 3000!')
})

const countryRouter = require('./modules/countries/country.router');
app.use('/countries', countryRouter);

const placeRouter = require('./modules/places/place.router');
app.use('/places', placeRouter);

const userRouter = require('./modules/users/user.router');
app.use('/auth', userRouter);

