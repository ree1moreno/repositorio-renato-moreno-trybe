const express = require('express');
const { create, findAll, findById } = require('../controllers/user.controller');
const { userValidate, authMiddleware } = require('../middlewares');

const router = express.Router();

router.post(
  '/', userValidate, create,
);

router.get(
  '/', authMiddleware, findAll,
);

router.get(
  '/:id', authMiddleware, findById,
);

router.delete(
  '/me',
);

module.exports = router;