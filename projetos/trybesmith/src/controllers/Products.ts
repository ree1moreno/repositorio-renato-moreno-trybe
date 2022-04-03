import { Request, Response } from 'express';
import Products from '../services/Products';

export default class ProductController {
  constructor(private productsService = new Products()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAll();
    return res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;
    const products = await this.productsService.create(name, amount);
    return res.status(201).json(products);
  };
}
