const express = require('express');
const productsControllers = require('../controllers/products.controllers');
const { productValidate } = require('../middlewares/index.middleware');

const router = express.Router();

router.get('/', productsControllers.listAll);
router.get('/:id', productsControllers.listById);
router.post('/', productValidate, productsControllers.create);
router.put('/:id', productValidate, productsControllers.update);
router.delete('/:id', productsControllers.deleteById);

module.exports = router;
