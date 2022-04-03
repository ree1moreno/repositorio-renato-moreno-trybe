const express = require('express');
const { login } = require('../controllers/login.controller');
const { loginValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/', loginValidate, login,
);

module.exports = router;