import express from 'express';
import User from '../controllers/User';
import userValidate from '../middlewares/userValidate';

const users = express.Router();
const user = new User();

users.post('/', userValidate, user.create);

export default users;
