const salesServices = require('../services/sales.services');

const listAll = async (_req, res, _next) => {
  const list = await salesServices.listAll();

  res.status(200).json(list);
};

const listById = async (req, res, _next) => {
  const { id } = req.params;
  const sale = await salesServices.listById(id);

  if (!sale.length) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(sale);
};

const create = async (req, res, _next) => {
  const { body } = req;
  const sale = await salesServices.create(body);
  
  return res.status(201).json(sale);
};

const update = async (req, res, _next) => {
  const { id } = req.params;
  const { body } = req;

  const result = await salesServices.update(body, id);

  return res.status(200).json(result);
};

module.exports = {
  create,
  listAll,
  listById,
  update,
};
