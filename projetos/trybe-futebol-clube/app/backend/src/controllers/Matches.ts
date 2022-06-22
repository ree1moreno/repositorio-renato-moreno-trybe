import { Request, Response } from 'express';
import MatchesService from '../services/Matches';
import TeamService from '../services/Teams';

export default class MatchesController {
  private matchService;

  private teamService;

  constructor() {
    this.matchService = new MatchesService();
    this.teamService = new TeamService();
  }

  public getAll = async (req: Request, res: Response) => {
    const { matches } = req.query;

    if (matches) {
      const matchesInProgress = await this.matchService.getInProgress(matches as string);
      if (matches !== null) {
        return res.status(200).json(matchesInProgress);
      }
      return res.status(400).json({ message: 'No matches in progress' });
    }
    const matchList = await this.matchService.getAll();
    if (matchList.length > 0) {
      return res.status(200).json(matchList);
    }
    return res.status(400).json({ message: 'No matches registered' });
  };

  public create = async (req: Request, res: Response) => {
    try {
      const matchInfo = req.body;
      const { homeTeam, awayTeam } = matchInfo;
      if (homeTeam === awayTeam) {
        return res.status(401)
          .json({ message: 'It is not possible to create a match with two equal teams' });
      }
      const teamHome = await this.teamService.getById(homeTeam);
      const teamAway = await this.teamService.getById(awayTeam);
      if (!teamHome || !teamAway) {
        return res.status(404).json({ message: 'There is no team with such id!' });
      }
      matchInfo.inProgress = true;
      const result = await this.matchService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: 'Not possible to create match' });
    }
  };

  public edit = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const goals = req.body;
      await this.matchService.edit(Number(id), goals);
      return res.status(200).send({ message: 'Success' });
    } catch (error) {
      return error;
    }
  };

  public finish = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await this.matchService.finish(Number(id));
      res.status(200).send({ message: 'Finished' });
    } catch (error) {
      res.status(400).json(error);
    }
  };
}
