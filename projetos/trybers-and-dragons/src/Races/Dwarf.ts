import Race from './Race';

export default class Dwarf extends Race {
  public _lifePoints: number;
  public static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 80;
    Dwarf._instance += 1;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._instance;
  }
}
