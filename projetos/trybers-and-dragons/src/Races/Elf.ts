import Race from './Race';

export default class Elf extends Race {
  public _lifePoints: number;
  public static _instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 99;
    Elf._instance += 1;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._instance;
  }
}
