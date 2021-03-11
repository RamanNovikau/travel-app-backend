
const mongoose = require('mongoose');
const url = "mongodb+srv://memory-game:ePWMNoNJtnrvZ4dv@cluster0.bsofz.mongodb.net/travel-app-db";
const dbConnection = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .catch((err) => logger.error(err.message));

    const db = mongoose.connection;
    db.once('open', () => {
        console.log('Mongo connection successfully!');
    });
};

module.exports = { dbConnection };