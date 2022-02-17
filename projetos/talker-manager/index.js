const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const rndToken = require('random-token')
  .create('abcdefghijklmnopqrstuvwxzyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
const middlewares = require('./middlewares');

const FILENAME = 'talker.json';

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

const getAllTalkers = async () => {
  const allTalkers = await fs.readFile(FILENAME);
  const parsedAllTalkers = JSON.parse(allTalkers);
  return parsedAllTalkers;
};

app.get('/talker', async (_req, res) => {
  const talkers = await getAllTalkers();
  if (!talkers) return res.status(200).json([]);
  return res.status(200).json(talkers);
});

app.get('/talker/search',
  middlewares.authToken,
  async (req, res) => {
  const { q } = req.query;
  const talkers = await getAllTalkers();
  const filteredTalkers = talkers
    .filter((result) => result.name.includes(q));

  if (!q) return res.status(200).json(talkers);
  return res.status(200).json(filteredTalkers);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await getAllTalkers();
  const talkerId = talkers.find((result) => result.id === Number(id));

  if (!talkerId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).json(talkerId);
});

app.post(
  '/login',
  middlewares.emailValidate,
  middlewares.passwordValidate,
  (_req, res) => {
  // https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28
  //  const token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(12);
  const token = rndToken(16);
     
  return res.status(200).json({ token });
  },
);

app.post(
  '/talker',
  middlewares.authToken,
  middlewares.nameValidate,
  middlewares.ageValidate,
  middlewares.talkValidate,
  middlewares.rateValidate,
  middlewares.dateValidate,
  async (req, res) => {
    const { name, age, talk } = req.body;
    const talkers = await getAllTalkers();
    const newTalker = {
      id: talkers.length + 1,
      name,
      age,
      talk,
    };
  
    talkers.push(newTalker);
    const stringfiedTalkers = JSON.stringify(talkers, null, 2);

    await fs.writeFile(FILENAME, stringfiedTalkers);
  
    return res.status(201).json({ ...newTalker });
  },
);

app.put(
  '/talker/:id',
  middlewares.authToken,
  middlewares.nameValidate,
  middlewares.ageValidate,
  middlewares.talkValidate,
  middlewares.dateValidate,
  middlewares.rateValidate,
  async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const talkers = await getAllTalkers();
    const talkerIndex = talkers.findIndex((result) => result.id === Number(id));

    talkers[talkerIndex] = { ...talkers[talkerIndex], name, age, talk };
    const stringfiedTalkers = JSON.stringify(talkers, null, 2);
    await fs.writeFile(FILENAME, stringfiedTalkers);

    return res.status(200).json({ ...talkers[talkerIndex] });
  },
);

app.delete(
  '/talker/:id',
  middlewares.authToken,
  async (req, res) => {
    const { id } = req.params;
    const talkers = await getAllTalkers();
    const filterTalker = talkers.filter((result) => result.id !== Number(id));
    const stringfiedTalkers = JSON.stringify(filterTalker, null, 2);

    await fs.writeFile(FILENAME, stringfiedTalkers);

    return res.status(204).end();
  },
);
