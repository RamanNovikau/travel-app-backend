const userRepo = require('./user.repository');

const addUser = async (userData) => {
    const id = await userRepo.addUser(userData);
    return id;
};

const getOneByEmail = async (email) => {
    const user = await userRepo.getOneByEmail(email);
    return user;
};

module.exports = {
    addUser,
    getOneByEmail,
};