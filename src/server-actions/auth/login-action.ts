'use server';

import { LoginSchema } from '@/lib/auth/validation';
import { LoginDto } from '@/utils/dto/auth/login.dto';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { log } from 'console';
import { cacheLife, cacheTag } from 'next/cache';

export type LoginActionState = {
  email: string;
  errors: string[];
};

export async function loginAction(
  prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  if (!(formData instanceof FormData)) {
    return {
      email: '',
      errors: ['Dados inválidos'],
    };
  }
  const email = formData.get('email')?.toString().trim() || '';

  const formDataObject = Object.fromEntries(formData.entries());
  const zodParsedObject = LoginSchema.safeParse(formDataObject);
  if (!zodParsedObject.success) {
    const errors = getZodErrorMessages(zodParsedObject.error);
    return {
      email,
      errors,
    };
  }

  const apiUrl = `${process.env.GTASKS_API_URL}/auth/sign-in`;
  if (!apiUrl) {
    return {
      email,
      errors: ['Sistema fora do ar. Por favor, contate o suporte'],
    };
  }

  const validData = zodParsedObject.data;
  const loginData: LoginDto = validData;
  const body = JSON.stringify(loginData);

  try {
    const result = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body,
    });
    const json: { token: string } = await result.json();
    log(json);
  } catch (e) {
    if (e instanceof Error) {
      return {
        email,
        errors: [e.message],
      };
    }
    return {
      email,
      errors: ['[ERR-002]: Por favor, contate o suporte'],
    };
  }

  return {
    email,
    errors: ['Dados inválidos'],
  };
}
