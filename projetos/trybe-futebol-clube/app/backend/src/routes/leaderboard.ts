import * as express from 'express';
import LeaderboardController from '../controllers/Leaderboard';

const leaderboard = express.Router();

leaderboard.get(
  '/',
  LeaderboardController.getAll,
);

leaderboard.get(
  '/home',
  LeaderboardController.getAllHome,

);

leaderboard.get(
  '/away',
  LeaderboardController.getAllAway,
);

export default leaderboard;
