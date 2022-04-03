const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const alreadyExists = await User.findOne({ where: { email } });
  
  if (alreadyExists) return res.status(409).json({ message: 'User already registered' });
  
  const newUser = await User.create({ displayName, email, password, image });
  const token = jwtGenerator({ id: newUser.id, displayName });
  
  return res.status(201).json({ token });
};

const findAll = async (_req, res) => {
  const userList = await User.findAll();

  return res.status(200).json(userList);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  return res.status(200).json(user);
};

module.exports = {
  create,
  findAll,
  findById,
};
