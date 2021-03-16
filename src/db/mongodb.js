const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const url = process.env.MONGO_DB_CONNECTION_STRING;
const dbConnection = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .catch((err) => console.log(err.message));

  const db = mongoose.connection;
  db.once('open', () => {
    console.log('Mongo connection successfully!');
  });
};

module.exports = { dbConnection };
