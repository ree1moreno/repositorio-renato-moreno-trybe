import * as express from 'express';
import TeamsController from '../controllers/Teams';

const teamsController = new TeamsController();

const teams = express.Router();

teams.get(
  '/',
  teamsController.getAll,
);

teams.get(
  '/:id',
  teamsController.getById,
);

export default teams;
