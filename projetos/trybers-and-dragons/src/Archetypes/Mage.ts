import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  public _energy: EnergyType;
  public static _instance = 0;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Mage._instance += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances(): number {
    return Mage._instance;
  }
}