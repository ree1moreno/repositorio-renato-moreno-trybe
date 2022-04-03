const express = require('express');
const { findAll, findById } = require('../controllers/post.controller');
const { authMiddleware } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
);

router.get(
  '/', authMiddleware, findAll,
);

router.get(
  '/:id', authMiddleware, findById,
);

router.put(
  '/:id',
);

router.delete(
  '/:id',
);

module.exports = router;