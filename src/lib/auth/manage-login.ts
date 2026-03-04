import { decodeJwt } from 'jose';
import { cookies } from 'next/headers';

const loginCookieName = process.env.LOGIN_COOKIE_NAME ?? '';

export async function createLoginSession(token: string) {
  if (!token) {
    throw new Error('Token inválido');
  }
  const cookieStore = await cookies();
  const payload = decodeJwt(token);
  const expiresAt = new Date(payload.exp! * 1000);
  cookieStore.set(loginCookieName, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: expiresAt,
  });
}
