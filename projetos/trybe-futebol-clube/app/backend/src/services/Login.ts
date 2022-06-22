import * as bcrypt from 'bcryptjs';
import Users from '../database/models/Users';

const login = async (user: { email: string, password: string }) => {
  const { email, password } = user;
  const userLogin = await Users.findOne({ where: { email } });

  // if (!userLogin) return null;
  if (!userLogin || !bcrypt.compareSync(password, userLogin.password)) return null;
  return userLogin;
};

const getById = async (id: number) => {
  const user = await Users.findByPk(id);
  if (!user) return false;
  return true;
};

export default { login, getById };
