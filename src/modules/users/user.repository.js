const User = require('./user.schema');
const { Types } = require('mongoose');

const addUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user.id;
};

const getOneByEmail = async (email) => {
    return User.findOne(email);
};

module.exports = {
    addUser,
    getOneByEmail,
};