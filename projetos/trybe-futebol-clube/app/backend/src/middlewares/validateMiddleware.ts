import { NextFunction, Request, Response } from 'express';
import loginSchema from '../schema/loginSchema';

const validateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;
  const validate = loginSchema.validate({ email, password });

  if (validate.error) {
    const [code, message] = validate.error.message.split('|');
    return res.status(Number(code)).json({ message });
  }

  return next();
};

export default validateMiddleware;
