import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import Users from '../database/models/Users';
import LoginService from '../services/Login';

const jwtConfig = {
  expiresIn: '7d',
};

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');

const generateToken = (id: number, username: string, role: string) => {
  const token: string = jwt.sign({ id, username, role }, secret, jwtConfig);
  return token;
};

const checkUser = (authorization: string) => {
  try {
    const { role } = jwt.verify(authorization, secret) as Users;
    return role;
  } catch (error) {
    return { message: 'Invalid Token' };
  }
};

const authToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    const { id } = jwt.verify(authorization, secret) as Users;
    const user = await LoginService.getById(id);
    if (user) {
      return next();
    }
  } catch (error) {
    return { message: 'Invalid Token' };
  }
};

export { generateToken, checkUser, authToken };
