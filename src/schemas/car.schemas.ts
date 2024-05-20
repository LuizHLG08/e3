import { z } from "zod";


export const carSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(2),
    description: z.string().optional(),
    brand: z.string().min(1),
    year: z.number(),
    km: z.number()
});

export const carCreateSchema = carSchema.omit({id : true});

export const carUpdateSchema = carSchema.omit({id : true}).partial();