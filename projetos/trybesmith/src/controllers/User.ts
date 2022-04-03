import { Request, Response } from 'express';
import User from '../services/User';

export default class UserController {
  constructor(private userService = new User()) {}

  public create = async (req: Request, res: Response) => {
    const newUser = req.body;
    await this.userService.create(newUser);
    const token = '123456';
    return res.status(201).json({ token });
  };
}
