const salesModels = require('../models/sales.models');

const listAll = async () => {
  const salesList = await salesModels.listAll();
  return salesList;
};

const listById = async (id) => {
  const salesList = await salesModels.listById(id);
  return salesList;
};

const create = async (sale) => {
  const salesList = await salesModels.create(sale);

  return salesList;
};

const update = async (sale, id) => {
  const result = await salesModels.update(sale, id);
  
  return result;
};

module.exports = {
  create,
  listAll,
  listById,
  update,
};
