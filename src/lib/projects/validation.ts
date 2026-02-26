import z from 'zod';

const ProjectBaseSchema = z.object({
  name: z
    .string('Formato de nome inválido')
    .trim()
    .min(3, 'O nome deve conter, no mínimo, 3 caracteres')
    .max(32, 'O nome deve conter, no máximo, 32 caracteres'),
  description: z
    .string('Formato de descrição inválido')
    .trim()
    .max(256, 'A descrição deve conter, no máximo, 256 caracteres'),
});

export const ProjectCreateSchema = ProjectBaseSchema;

export const ProjectUpdateSchema = ProjectBaseSchema.extend({});
