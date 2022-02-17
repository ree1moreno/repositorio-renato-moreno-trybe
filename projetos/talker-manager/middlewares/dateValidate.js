const dateValidate = (req, res, next) => {
  const { talk } = req.body;
  // https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy
  const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
  const isDateValidate = dateRegex.test(talk.watchedAt);

  if (!talk.watchedAt) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
  if (!isDateValidate) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  return next();
};

module.exports = dateValidate;