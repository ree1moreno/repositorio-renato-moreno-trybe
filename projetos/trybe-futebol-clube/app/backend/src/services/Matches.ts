import Teams from '../database/models/Teams';
import Matches from '../database/models/Matches';
import IMatch from '../interfaces/IMatch';

export default class MatchesService {
  private matchModel;

  constructor() { this.matchModel = Matches; }

  public async getAll() {
    const result = await this.matchModel.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }

  public async getInProgress(query: string) {
    const matchesInProgress = query === 'true';
    const result = await this.matchModel.findAll({
      where: { inProgress: matchesInProgress },
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  }

  public async create(match: IMatch) {
    try {
      const result = await this.matchModel.create(match);
      return result;
    } catch (error) {
      return { message: 'Not possible to create match' };
    }
  }

  public async edit(id: number, matchGoals: { homeTeamGoals: number, awayTeamGoals: number }) {
    try {
      const { homeTeamGoals, awayTeamGoals } = matchGoals;
      const result = await this.matchModel.update({
        homeTeamGoals, awayTeamGoals }, { where: { id },
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  public async finish(id: number) {
    try {
      const result = await this.matchModel.update({ inProgress: false }, {
        where: { id },
      });
      return result;
    } catch (error) {
      return error;
    }
  }
}
