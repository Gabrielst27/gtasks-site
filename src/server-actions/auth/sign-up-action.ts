'use server';

import { createLoginSession } from '@/lib/auth/manage-login';
import { SignUpSchema } from '@/lib/auth/validation';
import { LoginDto } from '@/utils/dto/auth/login.dto';
import { getZodErrorMessages } from '@/utils/get-zod-error-messages';
import { ERoutes } from '@/utils/routes.enum';
import { log } from 'console';
import { redirect } from 'next/navigation';

export type SignUpActionState = {
  name: string;
  email: string;
  errors: string[];
};

export async function signUpAction(
  prevState: SignUpActionState,
  formData: FormData,
): Promise<SignUpActionState> {
  if (!(formData instanceof FormData)) {
    return {
      name: '',
      email: '',
      errors: ['Dados inválidos'],
    };
  }

  const name = formData.get('name')?.toString().trim() || '';
  const email = formData.get('email')?.toString().trim() || '';
  const password = formData.get('password')?.toString().trim();
  const confirmPassword = formData.get('confirm-password')?.toString().trim();

  if (confirmPassword !== password) {
    log('aqui');
    return {
      name,
      email,
      errors: ['Senhas diferentes'],
    };
  }

  const formDataObject = Object.fromEntries(formData.entries());
  log(formDataObject);
  const zodParsedObject = SignUpSchema.safeParse(formDataObject);
  if (!zodParsedObject.success) {
    const errors = getZodErrorMessages(zodParsedObject.error);
    return {
      name,
      email,
      errors,
    };
  }

  const apiUrl = `${process.env.GTASKS_API_URL}/auth/sign-up`;
  if (!apiUrl) {
    return {
      name,
      email,
      errors: ['Sistema fora do ar. Por favor, contate o suporte'],
    };
  }

  const validData = zodParsedObject.data;
  const loginData: LoginDto = validData;
  const body = JSON.stringify(loginData);

  try {
    log('chamou a api');
    const result = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body,
    });

    const json: { token: string } = await result.json();

    await createLoginSession(json.token);
  } catch (e) {
    if (e instanceof Error) {
      return {
        name,
        email,
        errors: [e.message],
      };
    }
    return {
      name,
      email,
      errors: ['[ERR-002]: Por favor, contate o suporte'],
    };
  }
  redirect(ERoutes.WORKSPACE);
}
