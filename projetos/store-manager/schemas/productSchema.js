const Joi = require('joi');

// req.body é um objeto
module.exports = Joi.object({
  name: Joi.string().min(5).required()
  .messages({
    'any.required': '400|"name" is required',
    'string.base': '422|"name" must be a string',
    'string.min': '422|"name" length must be at least 5 characters long',
  }),
  quantity: Joi.number().integer().positive().strict()
  .required()
  .messages({
    'any.required': '400|"quantity" is required',
    'number.base': '422|"quantity" must be a number',
    'number.integer': '422|"quantity" must be a integer',
    'number.positive': '422|"quantity" must be greater than or equal to 1',
  }),
});
