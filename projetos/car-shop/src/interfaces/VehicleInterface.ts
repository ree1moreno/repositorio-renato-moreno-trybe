import { z } from 'zod';
// export interface Vehicle {
//   model: string,
//   year: number,
//   color: string,
//   status?: boolean,
//   buyValue: number,
// }

const VehicleSchema = z.object({
  model: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  year: z.number().int()
    .gte(1900, { message: 'Year must be equal or bigger 1900' })
    .lte(2022, { message: 'Year must be lower or equal 2022' }),
  color: z.string().min(3, { message: 'Must be 3 or more characters long' }),
  status: z.boolean().optional(),
  buyValue: z.number().int({ message: 'Must be an integer' }),
});

export type Vehicle = z.infer<typeof VehicleSchema>;
export { VehicleSchema };
