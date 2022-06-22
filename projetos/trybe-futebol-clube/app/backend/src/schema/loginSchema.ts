import * as joi from 'joi';

const message = '400|All fields must be filled';

export default joi.object({
  email: joi.string().email().empty().messages({
    'any.required': message,
    'string.empty': message,
    'string.email': '401|Incorrect email or password',
  }),
  password: joi.string().min(6).empty().messages({
    'any.required': message,
    'string.empty': message,
    'string.min': '401|Incorrect email or password',
  }),
});
