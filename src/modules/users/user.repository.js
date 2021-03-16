const User = require('./user.schema');

const addUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user.id;
};

const getOneByEmail = async (email) => {
  const user = await User.findOne(email);
  return user;
};

const getOneById = async (_id) => {
  const user = await User.findOne(_id);
  return user;
};

module.exports = {
  addUser,
  getOneByEmail,
  getOneById
};
