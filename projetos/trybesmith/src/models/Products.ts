import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product, NewProduct } from '../interfaces/products';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const SQL_QUERY = 'SELECT * FROM Trybesmith.Products;';
    const [rows] = await this.connection.execute(SQL_QUERY);
    return rows as Product[];
  }

  public async create(name: string, amount: string): Promise<NewProduct> {
    const SQL_QUERY = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const result = await this.connection.execute<ResultSetHeader>(SQL_QUERY, [
      name,
      amount,
    ]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { item: { id: insertId, name, amount } };
  }
}
