import { ZodError } from 'zod';

export function getZodErrorMessages(error: ZodError): string[] {
  return error.issues.map((error) => error.message);
}
