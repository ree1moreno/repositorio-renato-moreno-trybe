const express = require('express');
const salesControllers = require('../controllers/sales.controllers');
const { saleValidate } = require('../middlewares/index.middleware');

const router = express.Router();

router.get('/', salesControllers.listAll);
router.get('/:id', salesControllers.listById);
router.post('/', saleValidate, salesControllers.create);
router.put('/:id', saleValidate, salesControllers.update);

module.exports = router;
