import connection from '../models/connection';
import { NewProduct, Product } from '../interfaces/products';
import ProductModel from '../models/Products';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async getAll(): Promise<Product[]> {
    const product = await this.model.getAll();

    return product;
  }

  async create(name: string, amount: string): Promise<NewProduct> {
    const product = await this.model.create(name, amount);

    return product;
  }
}
