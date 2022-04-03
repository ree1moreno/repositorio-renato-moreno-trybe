import express from 'express';
import errorMiddleware from './middlewares/errorMiddleware';
import productsRouter from './routes/products';
import usersRouter from './routes/user';
import ordersRouter from './routes/order';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use(errorMiddleware);

export default app;
