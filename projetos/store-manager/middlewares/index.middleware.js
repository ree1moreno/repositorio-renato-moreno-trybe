const errorMiddleware = require('./error.middleware');
const productValidate = require('./product.validation.middleware');
const saleValidate = require('./sale.validation.middleware');

module.exports = {
  errorMiddleware,
  productValidate,
  saleValidate,
};
