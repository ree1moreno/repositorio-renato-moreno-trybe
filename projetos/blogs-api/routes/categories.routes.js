const express = require('express');
const { create, findAll } = require('../controllers/categorie.controller');
const { authMiddleware, categorieValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/', authMiddleware, categorieValidate, create,
);

router.get(
  '/', authMiddleware, findAll,
);

module.exports = router;