const connection = require('./connection.models');

const listAll = async () => {
  const SQL = 'SELECT * FROM StoreManager.products;';
  const [result] = await connection.execute(SQL);

  if (!result.length) return null;
  return result;
};

const listById = async (id) => {
  const SQL = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(SQL, [id]);
  
  if (!result) return null;
  return result[0];
};

const create = async (name, quantity) => {
  const SQL = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
  const [result] = await connection.execute(SQL, [name, quantity]);

  return {
    id: result.insertId,
    name,
    quantity,
  };
};

const update = async ({ id, name, quantity }) => {
  const SQL = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?';
  const [result] = await connection.execute(SQL, [name, quantity, id]);

  if (!result.affectedRows) return [];

  return {
    id,
    name,
    quantity,
  };
};

const deleteById = async (id) => {
  const SQL = 'DELETE FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(SQL, [id]);
  
  if (!result.affectedRows) return [];
  return true;
};

module.exports = {
  create,
  listAll,
  listById,
  update,
  deleteById,
};
