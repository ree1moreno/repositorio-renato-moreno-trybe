import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    // função ARRAYAGG vista na revisão com Isaac
    const SQL_QUERY = `SELECT 
          ordTable.id,
          ordTable.userId,
          JSON_ARRAYAGG(prdTable.id) AS products
      FROM
          Trybesmith.Orders AS ordTable
              INNER JOIN
          Trybesmith.Products AS prdTable ON ordTable.id = prdTable.orderId
      GROUP BY ordTable.id
      ORDER BY ordTable.userId;`;
    const [rows] = await this.connection.execute<RowDataPacket[]>(SQL_QUERY);

    return rows as Order[];
  }
}
