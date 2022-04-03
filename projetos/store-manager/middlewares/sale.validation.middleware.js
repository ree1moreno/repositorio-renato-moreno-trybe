const saleSchema = require('../schemas/saleSchema');

const saleValidate = (req, res, next) => {
  const { error } = saleSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  return next();
};

module.exports = saleValidate;
