import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(error);

  return res.status(500).json({ error: `Erro: ${error.message}` });
};

export default errorMiddleware;
