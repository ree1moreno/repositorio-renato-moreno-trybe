import { 
  Motorcycle, motorcycleSchema,
} from '../interfaces/MotorcycleInterface';
import Service, { ServiceError } from '.';
import MotorcycleModel from '../models/MotorcycleModel';

class MotorcycleService extends Service<Motorcycle> {
  constructor(model = new MotorcycleModel()) {
    super(model);
  }

  create = (
    async (obj: Motorcycle): Promise<Motorcycle | ServiceError | null> => {
      const parsed = motorcycleSchema.safeParse(obj);
      if (!parsed.success) {
        return { error: parsed.error };
      }
      return this.model.create(obj);
    });

  update = (
    async (id: string, obj: Motorcycle):
    Promise<Motorcycle | ServiceError | null> => {
      const parsed = motorcycleSchema.safeParse(obj);
      if (!parsed.success) {
        return { error: parsed.error };
      }
      return this.model.update(id, obj);
    });
}

export default MotorcycleService;
