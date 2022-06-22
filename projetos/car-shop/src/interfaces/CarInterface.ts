import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

const carSchema = VehicleSchema.extend({
  doorsQty: z.number().int()
    .gte(2, { message: 'Number must be equal or bigger 2' })
    .lte(4, { message: 'Number must be lower or equal 4' }),
  seatsQty: z.number().int()
    .gte(2, { message: 'Number must be equal or bigger 2' })
    .lte(7, { message: 'Number must lower or equal 7' }),
});

export type Car = z.infer<typeof carSchema>;
export { carSchema };
