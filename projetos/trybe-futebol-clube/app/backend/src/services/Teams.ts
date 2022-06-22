import Teams from '../database/models/Teams';

export default class TeamService {
  private TeamModel;

  constructor() { this.TeamModel = Teams; }

  public async getAll() {
    const result = await this.TeamModel.findAll();
    return result;
  }

  public async getById(id: number) {
    const result = await this.TeamModel.findByPk(id);
    return result;
  }
}
