import * as express from 'express';
import MatchesController from '../controllers/Matches';
import { authToken } from '../helpers/generateJWT';

const matchesController = new MatchesController();

const matches = express.Router();

matches.get(
  '/',
  matchesController.getAll,
);

matches.post(
  '/',
  authToken,
  matchesController.create,
);

matches.patch('/:id/finish', matchesController.finish);

matches.patch(
  '/:id',
  matchesController.edit,
);

export default matches;
