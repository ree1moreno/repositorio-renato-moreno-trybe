import express from 'express';
import Products from '../controllers/Products';
import validateMiddleware from '../middlewares/validateMiddleware';

const products = express.Router();
const productsList = new Products();

products.get('/', productsList.getAll);
products.post('/', validateMiddleware, productsList.create);

export default products;
