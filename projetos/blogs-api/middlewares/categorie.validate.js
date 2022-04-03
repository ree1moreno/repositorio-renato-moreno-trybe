const categorieSchema = require('../schemas/categorieSchema');

module.exports = async (req, res, next) => {
  const { error } = categorieSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  return next();
};
