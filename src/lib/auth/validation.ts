import z from 'zod';

const AuthBaseSchema = z.object({
  email: z.email('Formato de email inválido'),
  password: z
    .string('Formato de senha inválido')
    .trim()
    .min(6, 'A senha deve conter, no mínimo, 6 caracteres')
    .max(128, 'A senha pode conter, no máximo, 128 caracteres'),
});

export const LoginSchema = AuthBaseSchema;
