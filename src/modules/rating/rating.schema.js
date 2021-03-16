const { Schema, model } = require('mongoose');

const ratingSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    require: true
  },
  placeId: {
    type: Schema.Types.ObjectId,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  comment: {
    type: String,
    require: true
  },
  rating: Number
}, { collection: 'place-rating', versionKey: false });

const Rating = model('Rating', ratingSchema);

module.exports = Rating;
