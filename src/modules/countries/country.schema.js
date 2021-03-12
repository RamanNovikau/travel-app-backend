
const { Schema, model } = require('mongoose');

const langSchema = new Schema({
    _id: false,
    name: {
        type: String,
        required: true,
    },
    capital: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

const localeSchema = new Schema({
    _id: false,
    en: {
        type: { langSchema },
        required: true,
    },
    ru: {
        type: { langSchema },
        required: true,
    },
    de: {
        type: { langSchema },
        required: true,
    }
});

const countrySchema = new Schema({
    imageUrl: String,
    videoUrl: String,
    currency: {
        type: String,
        required: true,
    },
    ISOCode: {
        type: String,
        uppercase: true,
        unique: true,
        required: true,
    },
    capitalLocation: {
        type: String,
        coordinates: {
            type: [Number],
            required: true,
        },
    },
    timezones: [],
    flag: String,
    localizations: {
        type: { localeSchema },
        required: true,
    },
}, { collection: 'countries' });

const Country = model('Country', countrySchema);

module.exports = Country;