const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const login = async (req, res) => {
  const { email, password } = req.body;

  const alreadyExists = await User.findOne({ where: { email } });
  
  if (!alreadyExists) return res.status(400).json({ message: 'Invalid fields' });
  
  // if (password !== alreadyExists.password) {
  //   return res.status(401).json({ error: 'Invalid password' });
  // }

  const token = jwtGenerator({ email, password });
  
  return res.status(200).json({ token });
};

module.exports = {
  login,
};
