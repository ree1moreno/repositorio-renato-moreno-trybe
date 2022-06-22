import { Request, Response } from 'express';
import LeaderboardService from '../services/Leaderboard';

export default class LeaderboardController {
  static getAll = async (_req: Request, res: Response) => {
    const teams = await LeaderboardService.findAll();
    return res.status(200).json(teams);
  };

  static getAllHome = async (_req: Request, res: Response) => {
    const teams = await LeaderboardService.findAllHome();
    return res.status(200).json(teams);
  };

  static getAllAway = async (_req: Request, res: Response) => {
    const teams = await LeaderboardService.findAllAway();
    return res.status(200).json(teams);
  };
}
