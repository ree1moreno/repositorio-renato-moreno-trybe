const emailValidate = (req, res, next) => {
  const { email } = req.body;
  // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValidate = emailRegex.test(email);

  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!isEmailValidate) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  return next();
};

module.exports = emailValidate;