import { NextFunction, Request, Response } from 'express';
import userSchema from '../schema/user';

const userValidate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userSchema.validate(req.body, { convert: false });

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ error: message });
  }

  return next();
};

export default userValidate;
