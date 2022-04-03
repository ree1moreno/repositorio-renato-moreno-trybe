import { Request, Response } from 'express';
import OrderService from '../services/Order';

export default class OrderController {
  constructor(private orderModel = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const order = await this.orderModel.getAll();
    return res.status(200).json(order);
  };
}
