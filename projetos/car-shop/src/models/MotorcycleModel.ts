import { Schema, model as createModel, Document } from 'mongoose';
import { Motorcycle } from '../interfaces/MotorcycleInterface';
import MongoModel from './MongoModel';

interface MotorcycleDocument extends Motorcycle, Document { }

const motorcycleSchema = new Schema<MotorcycleDocument>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, { versionKey: false });

class MotorcycleModel extends MongoModel<Motorcycle> {
  constructor(model = createModel('Motorcycles', motorcycleSchema)) {
    super(model);
  }
}

export default MotorcycleModel;
