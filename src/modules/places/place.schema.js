const { Schema, model } = require('mongoose');

const placeLocaleSchema = new Schema({
  _id: false,
  lang: {
    type: String,
    required: true,
  },
  name: String,
  description: String,
});

const placeSchema = new Schema({
  countryId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  photoUrl: {
    type: String,
    require: true,
  },
  localizations: [placeLocaleSchema],
}, { collection: 'places' });

const Place = model('Place', placeSchema);

module.exports = Place;