import connection from '../models/connection';
import User from '../interfaces/user';
import UserModel from '../models/User';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: User): Promise<User> {
    const newUser = await this.model.create(user);

    return newUser;
  }
}
