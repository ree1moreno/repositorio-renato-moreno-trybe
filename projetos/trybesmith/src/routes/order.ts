import express from 'express';
import Order from '../controllers/Order';

const order = express.Router();
const orders = new Order();

order.get('/', orders.getAll);

export default order;
