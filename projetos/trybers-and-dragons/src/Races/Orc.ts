import Race from './Race';

export default class Orc extends Race {
  public _lifePoints: number;
  public static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 74;
    Orc._instance += 1;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._instance;
  }
}
