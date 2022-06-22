import * as express from 'express';
import LoginController from '../controllers/Login';
import validateMiddleware from '../middlewares/validateMiddleware';

const loginController = new LoginController();

const login = express.Router();

login.post(
  '/',
  validateMiddleware,
  loginController.login,
);

login.get(
  '/validate',
  loginController.validateLogin,
);

export default login;
