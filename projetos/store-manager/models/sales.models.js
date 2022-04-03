const connection = require('./connection.models');

const listAll = async () => {
  const SQL = `SELECT s.id AS saleId, s.date, p.product_id AS productId, p.quantity
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS p
  ON s.id = p.sale_id;`;
  const [result] = await connection.execute(SQL);

  if (!result.length) return null;
  return result;
};

const listById = async (id) => {
  const SQL = `SELECT s.date, p.product_id AS productId, p.quantity
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS p
  ON s.id = p.sale_id
  WHERE s.id = ?;`;
  const [result] = await connection.execute(SQL, [id]);
  
  if (!result) return null;
  return result;
};

const create = async (sale) => {
  const SALES_SQL = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
  const SALES_PRODUCTS_SQL = (
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);'
  );

  const [result] = await connection.execute(SALES_SQL, []);
  sale.forEach(async (item) => {
    await connection.execute(SALES_PRODUCTS_SQL, [result.insertId, item.productId, item.quantity]);
  });

  return { id: result.insertId, itemsSold: sale };
};

const update = async (itemUpdated, id) => {
  const SQL = (
    'UPDATE StoreManager.sales_products SET product_id = ?, quantity = ? WHERE sale_id = ?'
    );
  const { productId, quantity } = itemUpdated[0];
  const [result] = await connection.execute(SQL, [productId, quantity, id]);

  if (!result.affectedRows) return [];

  return {
    saleId: id,
    itemUpdated,
  };
};

module.exports = {
  create,
  listAll,
  listById,
  update,
};
