'use server';

import { ProfileDto } from '@/utils/dto/users/profile.dto';
import { ErrorMessages } from '@/utils/error-messages.enum';
import { log } from 'console';
import { decodeJwt } from 'jose';
import { cookies } from 'next/headers';

const loginCookieName = process.env.LOGIN_COOKIE_NAME ?? '';

export async function createLoginSession(token: string) {
  if (!token) {
    throw new Error(ErrorMessages.UNAUTHORIZED);
  }
  const payload = decodeJwt(token);
  const expiresAt = new Date(payload.exp! * 1000);
  const cookieStore = await cookies();
  cookieStore.set(loginCookieName, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: expiresAt,
  });
}

export async function getCurrentSession(): Promise<string> {
  const cookieStore = await cookies();
  const token = cookieStore.get(loginCookieName);
  if (!token) {
    throw new Error(ErrorMessages.UNAUTHORIZED);
  }
  return token.value;
}

export async function logout() {
  const cookieStore = await cookies();
  await cookieStore.delete(loginCookieName);
}

export async function getProfile() {
  try {
    const token = await getCurrentSession();
    const payload = decodeJwt(token);
    return {
      name: `${payload.name ?? ''}`,
      id: `${payload.id ?? ''}`,
      email: `${payload.email ?? ''}`,
      token: `${payload.token}` || null,
    };
  } catch {
    return null;
  }
}
