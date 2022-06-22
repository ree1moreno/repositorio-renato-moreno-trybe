import { Request, Response } from 'express';
import { checkUser, generateToken } from '../helpers/generateJWT';
import LoginService from '../services/Login';

export default class LoginController {
  public login = async (req: Request, res: Response) => {
    const userInfo = req.body;
    const userLogin = await LoginService.login(userInfo);

    if (userLogin !== null) {
      const { id, username, role, email } = userLogin;
      const token = generateToken(id, username, role);
      return res.status(200).json({ user: { id, username, role, email }, token });
    }
    return res.status(401).json({ message: 'Invalid user' });
  };

  public validateLogin = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const userToken = checkUser(authorization);
    if (typeof userToken === 'string') {
      return res.status(200).send(userToken);
    }
    return res.status(401).json({ userToken });
  };
}
