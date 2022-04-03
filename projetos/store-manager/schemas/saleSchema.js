const Joi = require('joi');

module.exports = Joi.array().items(
  Joi.object({
    productId: Joi.number().integer().positive().strict()
    .required()
    .messages({
      'any.required': '400|"productId" is required',
      'number.positive': '422|"productId" must be greater than or equal to 1',
    }),
    quantity: Joi.number().integer().positive().strict()
    .required()
    .messages({
      'any.required': '400|"quantity" is required',
      'number.base': '422|"quantity" must be a number',
      'number.integer': '422|"quantity" must be greater than or equal to 1',
      'number.positive': '422|"quantity" must be greater than or equal to 1',
    }),
  }),
);
