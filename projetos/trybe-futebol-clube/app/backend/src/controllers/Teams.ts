import { Request, Response } from 'express';
import TeamService from '../services/Teams';

export default class TeamsController {
  private serviceTeam;

  constructor() { this.serviceTeam = new TeamService(); }

  public getAll = async (_req: Request, res: Response) => {
    const teamsList = await this.serviceTeam.getAll();

    if (teamsList.length > 0) {
      return res.status(200).json(teamsList);
    }
    return res.status(400).json({ message: 'No teams registered' });
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this.serviceTeam.getById(Number(id));
    if (team) {
      return res.status(200).json(team);
    }
    return res.status(400).json({ message: 'Id do not exist' });
  };
}
