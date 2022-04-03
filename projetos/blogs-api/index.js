require('dotenv').config();
require('express-async-errors');
const express = require('express');
const { errorMiddleware } = require('./middlewares/index');
const { userRouter, loginRouter, postRouter, categoriesRouter } = require('./routes');

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
