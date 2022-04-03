import connection from '../models/connection';
import OrderModel from '../models/Order';
import Order from '../interfaces/order';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAll(): Promise<Order[]> {
    const order = await this.model.getAll();

    return order;
  }
}
