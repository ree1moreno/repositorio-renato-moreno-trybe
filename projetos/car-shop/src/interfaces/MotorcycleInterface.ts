import { z } from 'zod';
import { VehicleSchema } from './VehicleInterface';

const VALUES = ['Street', 'Custom', 'Trail'] as const;

const motorcycleSchema = VehicleSchema.extend({
  category: z.enum(VALUES),
  engineCapacity: z.number().int()
    .gt(0, { message: 'Number must bigger than 0' })
    .lte(2500, { message: 'Number must lower or equal 2500' }),
});

export type Motorcycle = z.infer<typeof motorcycleSchema>;
export { motorcycleSchema };
