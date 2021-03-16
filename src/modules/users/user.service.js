const userRepo = require('./user.repository');

const addUser = async (userData) => {
  const id = await userRepo.addUser(userData);
  return id;
};

const getOneByEmail = async (email) => {
  const user = await userRepo.getOneByEmail(email);
  return user;
};

const getOneById = async (_id) => {
  const user = userRepo.getOneById(_id);
  return user;
};

module.exports = {
  addUser,
  getOneByEmail,
  getOneById
};
