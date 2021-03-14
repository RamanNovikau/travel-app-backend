const userRepo = require('./user.repository');

const addUser = async (userData) => {
    await userRepo.addUser(userData);
};

const getOneByEmail = async (email) => {
    const user = await userRepo.getOneByEmail(email);
    return user;
};

module.exports = {
    addUser,
    getOneByEmail,
};