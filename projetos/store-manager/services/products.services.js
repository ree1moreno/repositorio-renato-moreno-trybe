const productModels = require('../models/products.models');

const listAll = async () => {
  const productList = await productModels.listAll();
  return productList;
};

const listById = async (id) => {
  const productList = await productModels.listById(id);
  return productList;
};

const create = async ({ name, quantity }) => {
  const productsList = await productModels.listAll();
  if (productsList.some((product) => product.name === name)) {
    return {
      code: 409, data: { message: 'Product already exists' },
    };
  }

  const modelResponse = await productModels.create(name, quantity);
  const data = modelResponse;

  return {
    code: 201,
    data,
  };
};

const update = async (product) => {
  const result = await productModels.update(product);
  if (result.length === 0) return null;

  return result;
};

const deleteById = async (id) => {
  const product = await productModels.deleteById(id);
  if (product.length === 0) return null;
  return product;
};

module.exports = {
  create,
  listAll,
  listById,
  update,
  deleteById,
};
