const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().email().empty().required()
  .messages({
    'any.required': '400|"email" is required',
    'string.email': '400|"email" must be a valid email',
    'string.empty': '400|"email" is not allowed to be empty',
  }),
  password: Joi.string().empty().required()
  .messages({
    'any.required': '400|"password" is required',
    'string.empty': '400|"password" is not allowed to be empty',
  }),
});
