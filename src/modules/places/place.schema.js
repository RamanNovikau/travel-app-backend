const { Schema, model } = require('mongoose');

const langSchema = new Schema({
  _id: false,
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const placeLocaleSchema = new Schema({
  _id: false,
  en: {
    type: { langSchema },
    required: true
  },
  ru: {
    type: { langSchema },
    required: true
  },
  de: {
    type: { langSchema },
    required: true
  }
});

const placeSchema = new Schema({
  countryId: {
    type: Schema.Types.ObjectId,
    require: true
  },
  photoUrl: {
    type: String,
    require: true
  },
  localizations: {
    type: { placeLocaleSchema },
    required: true
  }
}, { collection: 'places' });

const Place = model('Place', placeSchema);

module.exports = Place;
