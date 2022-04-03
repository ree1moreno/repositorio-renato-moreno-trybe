const productsServices = require('../services/products.services');

const listAll = async (_req, res, _next) => {
  const list = await productsServices.listAll();

  res.status(200).json(list);
};

const listById = async (req, res, _next) => {
  const { id } = req.params;
  const product = await productsServices.listById(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(product);
};

const create = async (req, res, _next) => {
  const { code, data } = await productsServices.create(req.body);
  return res.status(code).json(data);
};

const update = async (req, res, _next) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const result = await productsServices.update({ id, name, quantity });

  if (!result) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).send(result);
};

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await productsServices.deleteById(id);
  
  if (!result) return res.status(404).json({ message: 'Product not found' });
  if (result) res.status(204).end();
  return next();
};

module.exports = {
  create,
  listAll,
  listById,
  update,
  deleteById,
};
